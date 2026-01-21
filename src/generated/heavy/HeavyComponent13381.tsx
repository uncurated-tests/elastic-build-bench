'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13381<T> = T extends (infer U)[]
  ? DeepReadonlyArray13381<U>
  : T extends object
  ? DeepReadonlyObject13381<T>
  : T;

interface DeepReadonlyArray13381<T> extends ReadonlyArray<DeepReadonly13381<T>> {}

type DeepReadonlyObject13381<T> = {
  readonly [P in keyof T]: DeepReadonly13381<T[P]>;
};

type UnionToIntersection13381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13381<T> = UnionToIntersection13381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13381<T extends unknown[], V> = [...T, V];

type TuplifyUnion13381<T, L = LastOf13381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13381<TuplifyUnion13381<Exclude<T, L>>, L>;

type DeepPartial13381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13381<T[P]> }
  : T;

type Paths13381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13381<K, Paths13381<T[K], Prev13381[D]>> : never }[keyof T]
  : never;

type Prev13381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13381 {
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

type ConfigPaths13381 = Paths13381<NestedConfig13381>;

interface HeavyProps13381 {
  config: DeepPartial13381<NestedConfig13381>;
  path?: ConfigPaths13381;
}

const HeavyComponent13381 = memo(function HeavyComponent13381({ config }: HeavyProps13381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13381.displayName = 'HeavyComponent13381';
export default HeavyComponent13381;
