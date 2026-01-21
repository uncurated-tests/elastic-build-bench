'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13210<T> = T extends (infer U)[]
  ? DeepReadonlyArray13210<U>
  : T extends object
  ? DeepReadonlyObject13210<T>
  : T;

interface DeepReadonlyArray13210<T> extends ReadonlyArray<DeepReadonly13210<T>> {}

type DeepReadonlyObject13210<T> = {
  readonly [P in keyof T]: DeepReadonly13210<T[P]>;
};

type UnionToIntersection13210<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13210<T> = UnionToIntersection13210<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13210<T extends unknown[], V> = [...T, V];

type TuplifyUnion13210<T, L = LastOf13210<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13210<TuplifyUnion13210<Exclude<T, L>>, L>;

type DeepPartial13210<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13210<T[P]> }
  : T;

type Paths13210<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13210<K, Paths13210<T[K], Prev13210[D]>> : never }[keyof T]
  : never;

type Prev13210 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13210<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13210 {
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

type ConfigPaths13210 = Paths13210<NestedConfig13210>;

interface HeavyProps13210 {
  config: DeepPartial13210<NestedConfig13210>;
  path?: ConfigPaths13210;
}

const HeavyComponent13210 = memo(function HeavyComponent13210({ config }: HeavyProps13210) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13210) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13210 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13210: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13210.displayName = 'HeavyComponent13210';
export default HeavyComponent13210;
