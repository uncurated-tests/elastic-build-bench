'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13679<T> = T extends (infer U)[]
  ? DeepReadonlyArray13679<U>
  : T extends object
  ? DeepReadonlyObject13679<T>
  : T;

interface DeepReadonlyArray13679<T> extends ReadonlyArray<DeepReadonly13679<T>> {}

type DeepReadonlyObject13679<T> = {
  readonly [P in keyof T]: DeepReadonly13679<T[P]>;
};

type UnionToIntersection13679<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13679<T> = UnionToIntersection13679<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13679<T extends unknown[], V> = [...T, V];

type TuplifyUnion13679<T, L = LastOf13679<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13679<TuplifyUnion13679<Exclude<T, L>>, L>;

type DeepPartial13679<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13679<T[P]> }
  : T;

type Paths13679<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13679<K, Paths13679<T[K], Prev13679[D]>> : never }[keyof T]
  : never;

type Prev13679 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13679<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13679 {
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

type ConfigPaths13679 = Paths13679<NestedConfig13679>;

interface HeavyProps13679 {
  config: DeepPartial13679<NestedConfig13679>;
  path?: ConfigPaths13679;
}

const HeavyComponent13679 = memo(function HeavyComponent13679({ config }: HeavyProps13679) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13679) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13679 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13679: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13679.displayName = 'HeavyComponent13679';
export default HeavyComponent13679;
