'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13003<T> = T extends (infer U)[]
  ? DeepReadonlyArray13003<U>
  : T extends object
  ? DeepReadonlyObject13003<T>
  : T;

interface DeepReadonlyArray13003<T> extends ReadonlyArray<DeepReadonly13003<T>> {}

type DeepReadonlyObject13003<T> = {
  readonly [P in keyof T]: DeepReadonly13003<T[P]>;
};

type UnionToIntersection13003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13003<T> = UnionToIntersection13003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13003<T extends unknown[], V> = [...T, V];

type TuplifyUnion13003<T, L = LastOf13003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13003<TuplifyUnion13003<Exclude<T, L>>, L>;

type DeepPartial13003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13003<T[P]> }
  : T;

type Paths13003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13003<K, Paths13003<T[K], Prev13003[D]>> : never }[keyof T]
  : never;

type Prev13003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13003 {
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

type ConfigPaths13003 = Paths13003<NestedConfig13003>;

interface HeavyProps13003 {
  config: DeepPartial13003<NestedConfig13003>;
  path?: ConfigPaths13003;
}

const HeavyComponent13003 = memo(function HeavyComponent13003({ config }: HeavyProps13003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13003.displayName = 'HeavyComponent13003';
export default HeavyComponent13003;
