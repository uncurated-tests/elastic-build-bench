'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13958<T> = T extends (infer U)[]
  ? DeepReadonlyArray13958<U>
  : T extends object
  ? DeepReadonlyObject13958<T>
  : T;

interface DeepReadonlyArray13958<T> extends ReadonlyArray<DeepReadonly13958<T>> {}

type DeepReadonlyObject13958<T> = {
  readonly [P in keyof T]: DeepReadonly13958<T[P]>;
};

type UnionToIntersection13958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13958<T> = UnionToIntersection13958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13958<T extends unknown[], V> = [...T, V];

type TuplifyUnion13958<T, L = LastOf13958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13958<TuplifyUnion13958<Exclude<T, L>>, L>;

type DeepPartial13958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13958<T[P]> }
  : T;

type Paths13958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13958<K, Paths13958<T[K], Prev13958[D]>> : never }[keyof T]
  : never;

type Prev13958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13958 {
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

type ConfigPaths13958 = Paths13958<NestedConfig13958>;

interface HeavyProps13958 {
  config: DeepPartial13958<NestedConfig13958>;
  path?: ConfigPaths13958;
}

const HeavyComponent13958 = memo(function HeavyComponent13958({ config }: HeavyProps13958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13958.displayName = 'HeavyComponent13958';
export default HeavyComponent13958;
