'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13676<T> = T extends (infer U)[]
  ? DeepReadonlyArray13676<U>
  : T extends object
  ? DeepReadonlyObject13676<T>
  : T;

interface DeepReadonlyArray13676<T> extends ReadonlyArray<DeepReadonly13676<T>> {}

type DeepReadonlyObject13676<T> = {
  readonly [P in keyof T]: DeepReadonly13676<T[P]>;
};

type UnionToIntersection13676<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13676<T> = UnionToIntersection13676<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13676<T extends unknown[], V> = [...T, V];

type TuplifyUnion13676<T, L = LastOf13676<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13676<TuplifyUnion13676<Exclude<T, L>>, L>;

type DeepPartial13676<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13676<T[P]> }
  : T;

type Paths13676<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13676<K, Paths13676<T[K], Prev13676[D]>> : never }[keyof T]
  : never;

type Prev13676 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13676<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13676 {
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

type ConfigPaths13676 = Paths13676<NestedConfig13676>;

interface HeavyProps13676 {
  config: DeepPartial13676<NestedConfig13676>;
  path?: ConfigPaths13676;
}

const HeavyComponent13676 = memo(function HeavyComponent13676({ config }: HeavyProps13676) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13676) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13676 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13676: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13676.displayName = 'HeavyComponent13676';
export default HeavyComponent13676;
