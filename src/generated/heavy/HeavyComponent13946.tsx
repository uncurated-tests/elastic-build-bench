'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13946<T> = T extends (infer U)[]
  ? DeepReadonlyArray13946<U>
  : T extends object
  ? DeepReadonlyObject13946<T>
  : T;

interface DeepReadonlyArray13946<T> extends ReadonlyArray<DeepReadonly13946<T>> {}

type DeepReadonlyObject13946<T> = {
  readonly [P in keyof T]: DeepReadonly13946<T[P]>;
};

type UnionToIntersection13946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13946<T> = UnionToIntersection13946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13946<T extends unknown[], V> = [...T, V];

type TuplifyUnion13946<T, L = LastOf13946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13946<TuplifyUnion13946<Exclude<T, L>>, L>;

type DeepPartial13946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13946<T[P]> }
  : T;

type Paths13946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13946<K, Paths13946<T[K], Prev13946[D]>> : never }[keyof T]
  : never;

type Prev13946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13946 {
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

type ConfigPaths13946 = Paths13946<NestedConfig13946>;

interface HeavyProps13946 {
  config: DeepPartial13946<NestedConfig13946>;
  path?: ConfigPaths13946;
}

const HeavyComponent13946 = memo(function HeavyComponent13946({ config }: HeavyProps13946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13946.displayName = 'HeavyComponent13946';
export default HeavyComponent13946;
