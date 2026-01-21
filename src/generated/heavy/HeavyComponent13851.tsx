'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13851<T> = T extends (infer U)[]
  ? DeepReadonlyArray13851<U>
  : T extends object
  ? DeepReadonlyObject13851<T>
  : T;

interface DeepReadonlyArray13851<T> extends ReadonlyArray<DeepReadonly13851<T>> {}

type DeepReadonlyObject13851<T> = {
  readonly [P in keyof T]: DeepReadonly13851<T[P]>;
};

type UnionToIntersection13851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13851<T> = UnionToIntersection13851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13851<T extends unknown[], V> = [...T, V];

type TuplifyUnion13851<T, L = LastOf13851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13851<TuplifyUnion13851<Exclude<T, L>>, L>;

type DeepPartial13851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13851<T[P]> }
  : T;

type Paths13851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13851<K, Paths13851<T[K], Prev13851[D]>> : never }[keyof T]
  : never;

type Prev13851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13851 {
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

type ConfigPaths13851 = Paths13851<NestedConfig13851>;

interface HeavyProps13851 {
  config: DeepPartial13851<NestedConfig13851>;
  path?: ConfigPaths13851;
}

const HeavyComponent13851 = memo(function HeavyComponent13851({ config }: HeavyProps13851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13851.displayName = 'HeavyComponent13851';
export default HeavyComponent13851;
