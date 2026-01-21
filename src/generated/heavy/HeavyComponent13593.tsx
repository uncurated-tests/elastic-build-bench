'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13593<T> = T extends (infer U)[]
  ? DeepReadonlyArray13593<U>
  : T extends object
  ? DeepReadonlyObject13593<T>
  : T;

interface DeepReadonlyArray13593<T> extends ReadonlyArray<DeepReadonly13593<T>> {}

type DeepReadonlyObject13593<T> = {
  readonly [P in keyof T]: DeepReadonly13593<T[P]>;
};

type UnionToIntersection13593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13593<T> = UnionToIntersection13593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13593<T extends unknown[], V> = [...T, V];

type TuplifyUnion13593<T, L = LastOf13593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13593<TuplifyUnion13593<Exclude<T, L>>, L>;

type DeepPartial13593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13593<T[P]> }
  : T;

type Paths13593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13593<K, Paths13593<T[K], Prev13593[D]>> : never }[keyof T]
  : never;

type Prev13593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13593 {
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

type ConfigPaths13593 = Paths13593<NestedConfig13593>;

interface HeavyProps13593 {
  config: DeepPartial13593<NestedConfig13593>;
  path?: ConfigPaths13593;
}

const HeavyComponent13593 = memo(function HeavyComponent13593({ config }: HeavyProps13593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13593.displayName = 'HeavyComponent13593';
export default HeavyComponent13593;
