'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13897<T> = T extends (infer U)[]
  ? DeepReadonlyArray13897<U>
  : T extends object
  ? DeepReadonlyObject13897<T>
  : T;

interface DeepReadonlyArray13897<T> extends ReadonlyArray<DeepReadonly13897<T>> {}

type DeepReadonlyObject13897<T> = {
  readonly [P in keyof T]: DeepReadonly13897<T[P]>;
};

type UnionToIntersection13897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13897<T> = UnionToIntersection13897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13897<T extends unknown[], V> = [...T, V];

type TuplifyUnion13897<T, L = LastOf13897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13897<TuplifyUnion13897<Exclude<T, L>>, L>;

type DeepPartial13897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13897<T[P]> }
  : T;

type Paths13897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13897<K, Paths13897<T[K], Prev13897[D]>> : never }[keyof T]
  : never;

type Prev13897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13897 {
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

type ConfigPaths13897 = Paths13897<NestedConfig13897>;

interface HeavyProps13897 {
  config: DeepPartial13897<NestedConfig13897>;
  path?: ConfigPaths13897;
}

const HeavyComponent13897 = memo(function HeavyComponent13897({ config }: HeavyProps13897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13897.displayName = 'HeavyComponent13897';
export default HeavyComponent13897;
