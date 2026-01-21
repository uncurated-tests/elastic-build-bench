'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13542<T> = T extends (infer U)[]
  ? DeepReadonlyArray13542<U>
  : T extends object
  ? DeepReadonlyObject13542<T>
  : T;

interface DeepReadonlyArray13542<T> extends ReadonlyArray<DeepReadonly13542<T>> {}

type DeepReadonlyObject13542<T> = {
  readonly [P in keyof T]: DeepReadonly13542<T[P]>;
};

type UnionToIntersection13542<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13542<T> = UnionToIntersection13542<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13542<T extends unknown[], V> = [...T, V];

type TuplifyUnion13542<T, L = LastOf13542<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13542<TuplifyUnion13542<Exclude<T, L>>, L>;

type DeepPartial13542<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13542<T[P]> }
  : T;

type Paths13542<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13542<K, Paths13542<T[K], Prev13542[D]>> : never }[keyof T]
  : never;

type Prev13542 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13542<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13542 {
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

type ConfigPaths13542 = Paths13542<NestedConfig13542>;

interface HeavyProps13542 {
  config: DeepPartial13542<NestedConfig13542>;
  path?: ConfigPaths13542;
}

const HeavyComponent13542 = memo(function HeavyComponent13542({ config }: HeavyProps13542) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13542) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13542 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13542: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13542.displayName = 'HeavyComponent13542';
export default HeavyComponent13542;
