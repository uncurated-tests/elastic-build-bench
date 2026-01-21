'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13<T> = T extends (infer U)[]
  ? DeepReadonlyArray13<U>
  : T extends object
  ? DeepReadonlyObject13<T>
  : T;

interface DeepReadonlyArray13<T> extends ReadonlyArray<DeepReadonly13<T>> {}

type DeepReadonlyObject13<T> = {
  readonly [P in keyof T]: DeepReadonly13<T[P]>;
};

type UnionToIntersection13<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13<T> = UnionToIntersection13<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13<T extends unknown[], V> = [...T, V];

type TuplifyUnion13<T, L = LastOf13<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13<TuplifyUnion13<Exclude<T, L>>, L>;

type DeepPartial13<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13<T[P]> }
  : T;

type Paths13<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13<K, Paths13<T[K], Prev13[D]>> : never }[keyof T]
  : never;

type Prev13 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13 {
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

type ConfigPaths13 = Paths13<NestedConfig13>;

interface HeavyProps13 {
  config: DeepPartial13<NestedConfig13>;
  path?: ConfigPaths13;
}

const HeavyComponent13 = memo(function HeavyComponent13({ config }: HeavyProps13) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13.displayName = 'HeavyComponent13';
export default HeavyComponent13;
