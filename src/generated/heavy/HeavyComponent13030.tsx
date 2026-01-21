'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13030<T> = T extends (infer U)[]
  ? DeepReadonlyArray13030<U>
  : T extends object
  ? DeepReadonlyObject13030<T>
  : T;

interface DeepReadonlyArray13030<T> extends ReadonlyArray<DeepReadonly13030<T>> {}

type DeepReadonlyObject13030<T> = {
  readonly [P in keyof T]: DeepReadonly13030<T[P]>;
};

type UnionToIntersection13030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13030<T> = UnionToIntersection13030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13030<T extends unknown[], V> = [...T, V];

type TuplifyUnion13030<T, L = LastOf13030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13030<TuplifyUnion13030<Exclude<T, L>>, L>;

type DeepPartial13030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13030<T[P]> }
  : T;

type Paths13030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13030<K, Paths13030<T[K], Prev13030[D]>> : never }[keyof T]
  : never;

type Prev13030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13030 {
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

type ConfigPaths13030 = Paths13030<NestedConfig13030>;

interface HeavyProps13030 {
  config: DeepPartial13030<NestedConfig13030>;
  path?: ConfigPaths13030;
}

const HeavyComponent13030 = memo(function HeavyComponent13030({ config }: HeavyProps13030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13030.displayName = 'HeavyComponent13030';
export default HeavyComponent13030;
