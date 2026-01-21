'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13563<T> = T extends (infer U)[]
  ? DeepReadonlyArray13563<U>
  : T extends object
  ? DeepReadonlyObject13563<T>
  : T;

interface DeepReadonlyArray13563<T> extends ReadonlyArray<DeepReadonly13563<T>> {}

type DeepReadonlyObject13563<T> = {
  readonly [P in keyof T]: DeepReadonly13563<T[P]>;
};

type UnionToIntersection13563<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13563<T> = UnionToIntersection13563<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13563<T extends unknown[], V> = [...T, V];

type TuplifyUnion13563<T, L = LastOf13563<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13563<TuplifyUnion13563<Exclude<T, L>>, L>;

type DeepPartial13563<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13563<T[P]> }
  : T;

type Paths13563<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13563<K, Paths13563<T[K], Prev13563[D]>> : never }[keyof T]
  : never;

type Prev13563 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13563<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13563 {
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

type ConfigPaths13563 = Paths13563<NestedConfig13563>;

interface HeavyProps13563 {
  config: DeepPartial13563<NestedConfig13563>;
  path?: ConfigPaths13563;
}

const HeavyComponent13563 = memo(function HeavyComponent13563({ config }: HeavyProps13563) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13563) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13563 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13563: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13563.displayName = 'HeavyComponent13563';
export default HeavyComponent13563;
