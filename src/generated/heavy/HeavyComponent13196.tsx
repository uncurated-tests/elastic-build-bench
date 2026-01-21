'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13196<T> = T extends (infer U)[]
  ? DeepReadonlyArray13196<U>
  : T extends object
  ? DeepReadonlyObject13196<T>
  : T;

interface DeepReadonlyArray13196<T> extends ReadonlyArray<DeepReadonly13196<T>> {}

type DeepReadonlyObject13196<T> = {
  readonly [P in keyof T]: DeepReadonly13196<T[P]>;
};

type UnionToIntersection13196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13196<T> = UnionToIntersection13196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13196<T extends unknown[], V> = [...T, V];

type TuplifyUnion13196<T, L = LastOf13196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13196<TuplifyUnion13196<Exclude<T, L>>, L>;

type DeepPartial13196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13196<T[P]> }
  : T;

type Paths13196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13196<K, Paths13196<T[K], Prev13196[D]>> : never }[keyof T]
  : never;

type Prev13196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13196 {
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

type ConfigPaths13196 = Paths13196<NestedConfig13196>;

interface HeavyProps13196 {
  config: DeepPartial13196<NestedConfig13196>;
  path?: ConfigPaths13196;
}

const HeavyComponent13196 = memo(function HeavyComponent13196({ config }: HeavyProps13196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13196.displayName = 'HeavyComponent13196';
export default HeavyComponent13196;
