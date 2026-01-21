'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13296<T> = T extends (infer U)[]
  ? DeepReadonlyArray13296<U>
  : T extends object
  ? DeepReadonlyObject13296<T>
  : T;

interface DeepReadonlyArray13296<T> extends ReadonlyArray<DeepReadonly13296<T>> {}

type DeepReadonlyObject13296<T> = {
  readonly [P in keyof T]: DeepReadonly13296<T[P]>;
};

type UnionToIntersection13296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13296<T> = UnionToIntersection13296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13296<T extends unknown[], V> = [...T, V];

type TuplifyUnion13296<T, L = LastOf13296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13296<TuplifyUnion13296<Exclude<T, L>>, L>;

type DeepPartial13296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13296<T[P]> }
  : T;

type Paths13296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13296<K, Paths13296<T[K], Prev13296[D]>> : never }[keyof T]
  : never;

type Prev13296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13296 {
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

type ConfigPaths13296 = Paths13296<NestedConfig13296>;

interface HeavyProps13296 {
  config: DeepPartial13296<NestedConfig13296>;
  path?: ConfigPaths13296;
}

const HeavyComponent13296 = memo(function HeavyComponent13296({ config }: HeavyProps13296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13296.displayName = 'HeavyComponent13296';
export default HeavyComponent13296;
