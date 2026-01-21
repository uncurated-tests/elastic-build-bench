'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13078<T> = T extends (infer U)[]
  ? DeepReadonlyArray13078<U>
  : T extends object
  ? DeepReadonlyObject13078<T>
  : T;

interface DeepReadonlyArray13078<T> extends ReadonlyArray<DeepReadonly13078<T>> {}

type DeepReadonlyObject13078<T> = {
  readonly [P in keyof T]: DeepReadonly13078<T[P]>;
};

type UnionToIntersection13078<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13078<T> = UnionToIntersection13078<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13078<T extends unknown[], V> = [...T, V];

type TuplifyUnion13078<T, L = LastOf13078<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13078<TuplifyUnion13078<Exclude<T, L>>, L>;

type DeepPartial13078<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13078<T[P]> }
  : T;

type Paths13078<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13078<K, Paths13078<T[K], Prev13078[D]>> : never }[keyof T]
  : never;

type Prev13078 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13078<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13078 {
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

type ConfigPaths13078 = Paths13078<NestedConfig13078>;

interface HeavyProps13078 {
  config: DeepPartial13078<NestedConfig13078>;
  path?: ConfigPaths13078;
}

const HeavyComponent13078 = memo(function HeavyComponent13078({ config }: HeavyProps13078) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13078) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13078 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13078: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13078.displayName = 'HeavyComponent13078';
export default HeavyComponent13078;
