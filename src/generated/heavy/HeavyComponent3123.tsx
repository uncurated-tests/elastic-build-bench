'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3123<T> = T extends (infer U)[]
  ? DeepReadonlyArray3123<U>
  : T extends object
  ? DeepReadonlyObject3123<T>
  : T;

interface DeepReadonlyArray3123<T> extends ReadonlyArray<DeepReadonly3123<T>> {}

type DeepReadonlyObject3123<T> = {
  readonly [P in keyof T]: DeepReadonly3123<T[P]>;
};

type UnionToIntersection3123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3123<T> = UnionToIntersection3123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3123<T extends unknown[], V> = [...T, V];

type TuplifyUnion3123<T, L = LastOf3123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3123<TuplifyUnion3123<Exclude<T, L>>, L>;

type DeepPartial3123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3123<T[P]> }
  : T;

type Paths3123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3123<K, Paths3123<T[K], Prev3123[D]>> : never }[keyof T]
  : never;

type Prev3123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3123 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths3123 = Paths3123<NestedConfig3123>;

interface HeavyProps3123 {
  config: DeepPartial3123<NestedConfig3123>;
  path?: ConfigPaths3123;
}

const HeavyComponent3123 = memo(function HeavyComponent3123({ config }: HeavyProps3123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3123.displayName = 'HeavyComponent3123';
export default HeavyComponent3123;
