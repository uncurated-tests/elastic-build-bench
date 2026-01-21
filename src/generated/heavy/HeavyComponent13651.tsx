'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13651<T> = T extends (infer U)[]
  ? DeepReadonlyArray13651<U>
  : T extends object
  ? DeepReadonlyObject13651<T>
  : T;

interface DeepReadonlyArray13651<T> extends ReadonlyArray<DeepReadonly13651<T>> {}

type DeepReadonlyObject13651<T> = {
  readonly [P in keyof T]: DeepReadonly13651<T[P]>;
};

type UnionToIntersection13651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13651<T> = UnionToIntersection13651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13651<T extends unknown[], V> = [...T, V];

type TuplifyUnion13651<T, L = LastOf13651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13651<TuplifyUnion13651<Exclude<T, L>>, L>;

type DeepPartial13651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13651<T[P]> }
  : T;

type Paths13651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13651<K, Paths13651<T[K], Prev13651[D]>> : never }[keyof T]
  : never;

type Prev13651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13651 {
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

type ConfigPaths13651 = Paths13651<NestedConfig13651>;

interface HeavyProps13651 {
  config: DeepPartial13651<NestedConfig13651>;
  path?: ConfigPaths13651;
}

const HeavyComponent13651 = memo(function HeavyComponent13651({ config }: HeavyProps13651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13651.displayName = 'HeavyComponent13651';
export default HeavyComponent13651;
