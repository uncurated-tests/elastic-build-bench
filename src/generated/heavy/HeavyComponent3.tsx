'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3<T> = T extends (infer U)[]
  ? DeepReadonlyArray3<U>
  : T extends object
  ? DeepReadonlyObject3<T>
  : T;

interface DeepReadonlyArray3<T> extends ReadonlyArray<DeepReadonly3<T>> {}

type DeepReadonlyObject3<T> = {
  readonly [P in keyof T]: DeepReadonly3<T[P]>;
};

type UnionToIntersection3<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3<T> = UnionToIntersection3<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3<T extends unknown[], V> = [...T, V];

type TuplifyUnion3<T, L = LastOf3<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3<TuplifyUnion3<Exclude<T, L>>, L>;

type DeepPartial3<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3<T[P]> }
  : T;

type Paths3<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3<K, Paths3<T[K], Prev3[D]>> : never }[keyof T]
  : never;

type Prev3 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3 {
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

type ConfigPaths3 = Paths3<NestedConfig3>;

interface HeavyProps3 {
  config: DeepPartial3<NestedConfig3>;
  path?: ConfigPaths3;
}

const HeavyComponent3 = memo(function HeavyComponent3({ config }: HeavyProps3) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3.displayName = 'HeavyComponent3';
export default HeavyComponent3;
