'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3317<T> = T extends (infer U)[]
  ? DeepReadonlyArray3317<U>
  : T extends object
  ? DeepReadonlyObject3317<T>
  : T;

interface DeepReadonlyArray3317<T> extends ReadonlyArray<DeepReadonly3317<T>> {}

type DeepReadonlyObject3317<T> = {
  readonly [P in keyof T]: DeepReadonly3317<T[P]>;
};

type UnionToIntersection3317<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3317<T> = UnionToIntersection3317<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3317<T extends unknown[], V> = [...T, V];

type TuplifyUnion3317<T, L = LastOf3317<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3317<TuplifyUnion3317<Exclude<T, L>>, L>;

type DeepPartial3317<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3317<T[P]> }
  : T;

type Paths3317<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3317<K, Paths3317<T[K], Prev3317[D]>> : never }[keyof T]
  : never;

type Prev3317 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3317<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3317 {
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

type ConfigPaths3317 = Paths3317<NestedConfig3317>;

interface HeavyProps3317 {
  config: DeepPartial3317<NestedConfig3317>;
  path?: ConfigPaths3317;
}

const HeavyComponent3317 = memo(function HeavyComponent3317({ config }: HeavyProps3317) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3317) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3317 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3317: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3317.displayName = 'HeavyComponent3317';
export default HeavyComponent3317;
