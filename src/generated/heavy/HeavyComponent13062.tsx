'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13062<T> = T extends (infer U)[]
  ? DeepReadonlyArray13062<U>
  : T extends object
  ? DeepReadonlyObject13062<T>
  : T;

interface DeepReadonlyArray13062<T> extends ReadonlyArray<DeepReadonly13062<T>> {}

type DeepReadonlyObject13062<T> = {
  readonly [P in keyof T]: DeepReadonly13062<T[P]>;
};

type UnionToIntersection13062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13062<T> = UnionToIntersection13062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13062<T extends unknown[], V> = [...T, V];

type TuplifyUnion13062<T, L = LastOf13062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13062<TuplifyUnion13062<Exclude<T, L>>, L>;

type DeepPartial13062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13062<T[P]> }
  : T;

type Paths13062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13062<K, Paths13062<T[K], Prev13062[D]>> : never }[keyof T]
  : never;

type Prev13062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13062 {
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

type ConfigPaths13062 = Paths13062<NestedConfig13062>;

interface HeavyProps13062 {
  config: DeepPartial13062<NestedConfig13062>;
  path?: ConfigPaths13062;
}

const HeavyComponent13062 = memo(function HeavyComponent13062({ config }: HeavyProps13062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13062.displayName = 'HeavyComponent13062';
export default HeavyComponent13062;
