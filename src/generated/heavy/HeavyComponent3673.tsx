'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3673<T> = T extends (infer U)[]
  ? DeepReadonlyArray3673<U>
  : T extends object
  ? DeepReadonlyObject3673<T>
  : T;

interface DeepReadonlyArray3673<T> extends ReadonlyArray<DeepReadonly3673<T>> {}

type DeepReadonlyObject3673<T> = {
  readonly [P in keyof T]: DeepReadonly3673<T[P]>;
};

type UnionToIntersection3673<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3673<T> = UnionToIntersection3673<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3673<T extends unknown[], V> = [...T, V];

type TuplifyUnion3673<T, L = LastOf3673<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3673<TuplifyUnion3673<Exclude<T, L>>, L>;

type DeepPartial3673<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3673<T[P]> }
  : T;

type Paths3673<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3673<K, Paths3673<T[K], Prev3673[D]>> : never }[keyof T]
  : never;

type Prev3673 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3673<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3673 {
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

type ConfigPaths3673 = Paths3673<NestedConfig3673>;

interface HeavyProps3673 {
  config: DeepPartial3673<NestedConfig3673>;
  path?: ConfigPaths3673;
}

const HeavyComponent3673 = memo(function HeavyComponent3673({ config }: HeavyProps3673) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3673) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3673 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3673: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3673.displayName = 'HeavyComponent3673';
export default HeavyComponent3673;
