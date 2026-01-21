'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13953<T> = T extends (infer U)[]
  ? DeepReadonlyArray13953<U>
  : T extends object
  ? DeepReadonlyObject13953<T>
  : T;

interface DeepReadonlyArray13953<T> extends ReadonlyArray<DeepReadonly13953<T>> {}

type DeepReadonlyObject13953<T> = {
  readonly [P in keyof T]: DeepReadonly13953<T[P]>;
};

type UnionToIntersection13953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13953<T> = UnionToIntersection13953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13953<T extends unknown[], V> = [...T, V];

type TuplifyUnion13953<T, L = LastOf13953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13953<TuplifyUnion13953<Exclude<T, L>>, L>;

type DeepPartial13953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13953<T[P]> }
  : T;

type Paths13953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13953<K, Paths13953<T[K], Prev13953[D]>> : never }[keyof T]
  : never;

type Prev13953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13953 {
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

type ConfigPaths13953 = Paths13953<NestedConfig13953>;

interface HeavyProps13953 {
  config: DeepPartial13953<NestedConfig13953>;
  path?: ConfigPaths13953;
}

const HeavyComponent13953 = memo(function HeavyComponent13953({ config }: HeavyProps13953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13953.displayName = 'HeavyComponent13953';
export default HeavyComponent13953;
