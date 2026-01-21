'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13736<T> = T extends (infer U)[]
  ? DeepReadonlyArray13736<U>
  : T extends object
  ? DeepReadonlyObject13736<T>
  : T;

interface DeepReadonlyArray13736<T> extends ReadonlyArray<DeepReadonly13736<T>> {}

type DeepReadonlyObject13736<T> = {
  readonly [P in keyof T]: DeepReadonly13736<T[P]>;
};

type UnionToIntersection13736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13736<T> = UnionToIntersection13736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13736<T extends unknown[], V> = [...T, V];

type TuplifyUnion13736<T, L = LastOf13736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13736<TuplifyUnion13736<Exclude<T, L>>, L>;

type DeepPartial13736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13736<T[P]> }
  : T;

type Paths13736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13736<K, Paths13736<T[K], Prev13736[D]>> : never }[keyof T]
  : never;

type Prev13736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13736 {
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

type ConfigPaths13736 = Paths13736<NestedConfig13736>;

interface HeavyProps13736 {
  config: DeepPartial13736<NestedConfig13736>;
  path?: ConfigPaths13736;
}

const HeavyComponent13736 = memo(function HeavyComponent13736({ config }: HeavyProps13736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13736.displayName = 'HeavyComponent13736';
export default HeavyComponent13736;
