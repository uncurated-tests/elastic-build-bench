'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13687<T> = T extends (infer U)[]
  ? DeepReadonlyArray13687<U>
  : T extends object
  ? DeepReadonlyObject13687<T>
  : T;

interface DeepReadonlyArray13687<T> extends ReadonlyArray<DeepReadonly13687<T>> {}

type DeepReadonlyObject13687<T> = {
  readonly [P in keyof T]: DeepReadonly13687<T[P]>;
};

type UnionToIntersection13687<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13687<T> = UnionToIntersection13687<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13687<T extends unknown[], V> = [...T, V];

type TuplifyUnion13687<T, L = LastOf13687<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13687<TuplifyUnion13687<Exclude<T, L>>, L>;

type DeepPartial13687<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13687<T[P]> }
  : T;

type Paths13687<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13687<K, Paths13687<T[K], Prev13687[D]>> : never }[keyof T]
  : never;

type Prev13687 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13687<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13687 {
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

type ConfigPaths13687 = Paths13687<NestedConfig13687>;

interface HeavyProps13687 {
  config: DeepPartial13687<NestedConfig13687>;
  path?: ConfigPaths13687;
}

const HeavyComponent13687 = memo(function HeavyComponent13687({ config }: HeavyProps13687) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13687) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13687 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13687: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13687.displayName = 'HeavyComponent13687';
export default HeavyComponent13687;
