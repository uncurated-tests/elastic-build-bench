'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13795<T> = T extends (infer U)[]
  ? DeepReadonlyArray13795<U>
  : T extends object
  ? DeepReadonlyObject13795<T>
  : T;

interface DeepReadonlyArray13795<T> extends ReadonlyArray<DeepReadonly13795<T>> {}

type DeepReadonlyObject13795<T> = {
  readonly [P in keyof T]: DeepReadonly13795<T[P]>;
};

type UnionToIntersection13795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13795<T> = UnionToIntersection13795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13795<T extends unknown[], V> = [...T, V];

type TuplifyUnion13795<T, L = LastOf13795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13795<TuplifyUnion13795<Exclude<T, L>>, L>;

type DeepPartial13795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13795<T[P]> }
  : T;

type Paths13795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13795<K, Paths13795<T[K], Prev13795[D]>> : never }[keyof T]
  : never;

type Prev13795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13795 {
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

type ConfigPaths13795 = Paths13795<NestedConfig13795>;

interface HeavyProps13795 {
  config: DeepPartial13795<NestedConfig13795>;
  path?: ConfigPaths13795;
}

const HeavyComponent13795 = memo(function HeavyComponent13795({ config }: HeavyProps13795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13795.displayName = 'HeavyComponent13795';
export default HeavyComponent13795;
