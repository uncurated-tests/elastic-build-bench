'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13120<T> = T extends (infer U)[]
  ? DeepReadonlyArray13120<U>
  : T extends object
  ? DeepReadonlyObject13120<T>
  : T;

interface DeepReadonlyArray13120<T> extends ReadonlyArray<DeepReadonly13120<T>> {}

type DeepReadonlyObject13120<T> = {
  readonly [P in keyof T]: DeepReadonly13120<T[P]>;
};

type UnionToIntersection13120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13120<T> = UnionToIntersection13120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13120<T extends unknown[], V> = [...T, V];

type TuplifyUnion13120<T, L = LastOf13120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13120<TuplifyUnion13120<Exclude<T, L>>, L>;

type DeepPartial13120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13120<T[P]> }
  : T;

type Paths13120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13120<K, Paths13120<T[K], Prev13120[D]>> : never }[keyof T]
  : never;

type Prev13120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13120 {
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

type ConfigPaths13120 = Paths13120<NestedConfig13120>;

interface HeavyProps13120 {
  config: DeepPartial13120<NestedConfig13120>;
  path?: ConfigPaths13120;
}

const HeavyComponent13120 = memo(function HeavyComponent13120({ config }: HeavyProps13120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13120.displayName = 'HeavyComponent13120';
export default HeavyComponent13120;
