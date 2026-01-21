'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13713<T> = T extends (infer U)[]
  ? DeepReadonlyArray13713<U>
  : T extends object
  ? DeepReadonlyObject13713<T>
  : T;

interface DeepReadonlyArray13713<T> extends ReadonlyArray<DeepReadonly13713<T>> {}

type DeepReadonlyObject13713<T> = {
  readonly [P in keyof T]: DeepReadonly13713<T[P]>;
};

type UnionToIntersection13713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13713<T> = UnionToIntersection13713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13713<T extends unknown[], V> = [...T, V];

type TuplifyUnion13713<T, L = LastOf13713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13713<TuplifyUnion13713<Exclude<T, L>>, L>;

type DeepPartial13713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13713<T[P]> }
  : T;

type Paths13713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13713<K, Paths13713<T[K], Prev13713[D]>> : never }[keyof T]
  : never;

type Prev13713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13713 {
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

type ConfigPaths13713 = Paths13713<NestedConfig13713>;

interface HeavyProps13713 {
  config: DeepPartial13713<NestedConfig13713>;
  path?: ConfigPaths13713;
}

const HeavyComponent13713 = memo(function HeavyComponent13713({ config }: HeavyProps13713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13713.displayName = 'HeavyComponent13713';
export default HeavyComponent13713;
