'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13962<T> = T extends (infer U)[]
  ? DeepReadonlyArray13962<U>
  : T extends object
  ? DeepReadonlyObject13962<T>
  : T;

interface DeepReadonlyArray13962<T> extends ReadonlyArray<DeepReadonly13962<T>> {}

type DeepReadonlyObject13962<T> = {
  readonly [P in keyof T]: DeepReadonly13962<T[P]>;
};

type UnionToIntersection13962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13962<T> = UnionToIntersection13962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13962<T extends unknown[], V> = [...T, V];

type TuplifyUnion13962<T, L = LastOf13962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13962<TuplifyUnion13962<Exclude<T, L>>, L>;

type DeepPartial13962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13962<T[P]> }
  : T;

type Paths13962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13962<K, Paths13962<T[K], Prev13962[D]>> : never }[keyof T]
  : never;

type Prev13962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13962 {
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

type ConfigPaths13962 = Paths13962<NestedConfig13962>;

interface HeavyProps13962 {
  config: DeepPartial13962<NestedConfig13962>;
  path?: ConfigPaths13962;
}

const HeavyComponent13962 = memo(function HeavyComponent13962({ config }: HeavyProps13962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13962.displayName = 'HeavyComponent13962';
export default HeavyComponent13962;
