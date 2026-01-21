'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13004<T> = T extends (infer U)[]
  ? DeepReadonlyArray13004<U>
  : T extends object
  ? DeepReadonlyObject13004<T>
  : T;

interface DeepReadonlyArray13004<T> extends ReadonlyArray<DeepReadonly13004<T>> {}

type DeepReadonlyObject13004<T> = {
  readonly [P in keyof T]: DeepReadonly13004<T[P]>;
};

type UnionToIntersection13004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13004<T> = UnionToIntersection13004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13004<T extends unknown[], V> = [...T, V];

type TuplifyUnion13004<T, L = LastOf13004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13004<TuplifyUnion13004<Exclude<T, L>>, L>;

type DeepPartial13004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13004<T[P]> }
  : T;

type Paths13004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13004<K, Paths13004<T[K], Prev13004[D]>> : never }[keyof T]
  : never;

type Prev13004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13004 {
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

type ConfigPaths13004 = Paths13004<NestedConfig13004>;

interface HeavyProps13004 {
  config: DeepPartial13004<NestedConfig13004>;
  path?: ConfigPaths13004;
}

const HeavyComponent13004 = memo(function HeavyComponent13004({ config }: HeavyProps13004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13004.displayName = 'HeavyComponent13004';
export default HeavyComponent13004;
