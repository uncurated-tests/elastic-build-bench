'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13925<T> = T extends (infer U)[]
  ? DeepReadonlyArray13925<U>
  : T extends object
  ? DeepReadonlyObject13925<T>
  : T;

interface DeepReadonlyArray13925<T> extends ReadonlyArray<DeepReadonly13925<T>> {}

type DeepReadonlyObject13925<T> = {
  readonly [P in keyof T]: DeepReadonly13925<T[P]>;
};

type UnionToIntersection13925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13925<T> = UnionToIntersection13925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13925<T extends unknown[], V> = [...T, V];

type TuplifyUnion13925<T, L = LastOf13925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13925<TuplifyUnion13925<Exclude<T, L>>, L>;

type DeepPartial13925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13925<T[P]> }
  : T;

type Paths13925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13925<K, Paths13925<T[K], Prev13925[D]>> : never }[keyof T]
  : never;

type Prev13925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13925 {
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

type ConfigPaths13925 = Paths13925<NestedConfig13925>;

interface HeavyProps13925 {
  config: DeepPartial13925<NestedConfig13925>;
  path?: ConfigPaths13925;
}

const HeavyComponent13925 = memo(function HeavyComponent13925({ config }: HeavyProps13925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13925.displayName = 'HeavyComponent13925';
export default HeavyComponent13925;
