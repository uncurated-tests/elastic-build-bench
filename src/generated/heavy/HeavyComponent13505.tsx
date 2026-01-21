'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13505<T> = T extends (infer U)[]
  ? DeepReadonlyArray13505<U>
  : T extends object
  ? DeepReadonlyObject13505<T>
  : T;

interface DeepReadonlyArray13505<T> extends ReadonlyArray<DeepReadonly13505<T>> {}

type DeepReadonlyObject13505<T> = {
  readonly [P in keyof T]: DeepReadonly13505<T[P]>;
};

type UnionToIntersection13505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13505<T> = UnionToIntersection13505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13505<T extends unknown[], V> = [...T, V];

type TuplifyUnion13505<T, L = LastOf13505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13505<TuplifyUnion13505<Exclude<T, L>>, L>;

type DeepPartial13505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13505<T[P]> }
  : T;

type Paths13505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13505<K, Paths13505<T[K], Prev13505[D]>> : never }[keyof T]
  : never;

type Prev13505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13505 {
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

type ConfigPaths13505 = Paths13505<NestedConfig13505>;

interface HeavyProps13505 {
  config: DeepPartial13505<NestedConfig13505>;
  path?: ConfigPaths13505;
}

const HeavyComponent13505 = memo(function HeavyComponent13505({ config }: HeavyProps13505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13505.displayName = 'HeavyComponent13505';
export default HeavyComponent13505;
