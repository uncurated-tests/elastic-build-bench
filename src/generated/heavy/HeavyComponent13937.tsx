'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13937<T> = T extends (infer U)[]
  ? DeepReadonlyArray13937<U>
  : T extends object
  ? DeepReadonlyObject13937<T>
  : T;

interface DeepReadonlyArray13937<T> extends ReadonlyArray<DeepReadonly13937<T>> {}

type DeepReadonlyObject13937<T> = {
  readonly [P in keyof T]: DeepReadonly13937<T[P]>;
};

type UnionToIntersection13937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13937<T> = UnionToIntersection13937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13937<T extends unknown[], V> = [...T, V];

type TuplifyUnion13937<T, L = LastOf13937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13937<TuplifyUnion13937<Exclude<T, L>>, L>;

type DeepPartial13937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13937<T[P]> }
  : T;

type Paths13937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13937<K, Paths13937<T[K], Prev13937[D]>> : never }[keyof T]
  : never;

type Prev13937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13937 {
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

type ConfigPaths13937 = Paths13937<NestedConfig13937>;

interface HeavyProps13937 {
  config: DeepPartial13937<NestedConfig13937>;
  path?: ConfigPaths13937;
}

const HeavyComponent13937 = memo(function HeavyComponent13937({ config }: HeavyProps13937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13937.displayName = 'HeavyComponent13937';
export default HeavyComponent13937;
