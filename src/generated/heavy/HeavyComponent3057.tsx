'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3057<T> = T extends (infer U)[]
  ? DeepReadonlyArray3057<U>
  : T extends object
  ? DeepReadonlyObject3057<T>
  : T;

interface DeepReadonlyArray3057<T> extends ReadonlyArray<DeepReadonly3057<T>> {}

type DeepReadonlyObject3057<T> = {
  readonly [P in keyof T]: DeepReadonly3057<T[P]>;
};

type UnionToIntersection3057<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3057<T> = UnionToIntersection3057<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3057<T extends unknown[], V> = [...T, V];

type TuplifyUnion3057<T, L = LastOf3057<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3057<TuplifyUnion3057<Exclude<T, L>>, L>;

type DeepPartial3057<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3057<T[P]> }
  : T;

type Paths3057<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3057<K, Paths3057<T[K], Prev3057[D]>> : never }[keyof T]
  : never;

type Prev3057 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3057<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3057 {
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

type ConfigPaths3057 = Paths3057<NestedConfig3057>;

interface HeavyProps3057 {
  config: DeepPartial3057<NestedConfig3057>;
  path?: ConfigPaths3057;
}

const HeavyComponent3057 = memo(function HeavyComponent3057({ config }: HeavyProps3057) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3057) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3057 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3057: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3057.displayName = 'HeavyComponent3057';
export default HeavyComponent3057;
