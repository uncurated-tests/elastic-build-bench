'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13334<T> = T extends (infer U)[]
  ? DeepReadonlyArray13334<U>
  : T extends object
  ? DeepReadonlyObject13334<T>
  : T;

interface DeepReadonlyArray13334<T> extends ReadonlyArray<DeepReadonly13334<T>> {}

type DeepReadonlyObject13334<T> = {
  readonly [P in keyof T]: DeepReadonly13334<T[P]>;
};

type UnionToIntersection13334<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13334<T> = UnionToIntersection13334<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13334<T extends unknown[], V> = [...T, V];

type TuplifyUnion13334<T, L = LastOf13334<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13334<TuplifyUnion13334<Exclude<T, L>>, L>;

type DeepPartial13334<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13334<T[P]> }
  : T;

type Paths13334<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13334<K, Paths13334<T[K], Prev13334[D]>> : never }[keyof T]
  : never;

type Prev13334 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13334<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13334 {
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

type ConfigPaths13334 = Paths13334<NestedConfig13334>;

interface HeavyProps13334 {
  config: DeepPartial13334<NestedConfig13334>;
  path?: ConfigPaths13334;
}

const HeavyComponent13334 = memo(function HeavyComponent13334({ config }: HeavyProps13334) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13334) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13334 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13334: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13334.displayName = 'HeavyComponent13334';
export default HeavyComponent13334;
