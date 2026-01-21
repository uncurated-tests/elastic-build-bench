'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13646<T> = T extends (infer U)[]
  ? DeepReadonlyArray13646<U>
  : T extends object
  ? DeepReadonlyObject13646<T>
  : T;

interface DeepReadonlyArray13646<T> extends ReadonlyArray<DeepReadonly13646<T>> {}

type DeepReadonlyObject13646<T> = {
  readonly [P in keyof T]: DeepReadonly13646<T[P]>;
};

type UnionToIntersection13646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13646<T> = UnionToIntersection13646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13646<T extends unknown[], V> = [...T, V];

type TuplifyUnion13646<T, L = LastOf13646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13646<TuplifyUnion13646<Exclude<T, L>>, L>;

type DeepPartial13646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13646<T[P]> }
  : T;

type Paths13646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13646<K, Paths13646<T[K], Prev13646[D]>> : never }[keyof T]
  : never;

type Prev13646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13646 {
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

type ConfigPaths13646 = Paths13646<NestedConfig13646>;

interface HeavyProps13646 {
  config: DeepPartial13646<NestedConfig13646>;
  path?: ConfigPaths13646;
}

const HeavyComponent13646 = memo(function HeavyComponent13646({ config }: HeavyProps13646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13646.displayName = 'HeavyComponent13646';
export default HeavyComponent13646;
