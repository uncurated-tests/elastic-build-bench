'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13014<T> = T extends (infer U)[]
  ? DeepReadonlyArray13014<U>
  : T extends object
  ? DeepReadonlyObject13014<T>
  : T;

interface DeepReadonlyArray13014<T> extends ReadonlyArray<DeepReadonly13014<T>> {}

type DeepReadonlyObject13014<T> = {
  readonly [P in keyof T]: DeepReadonly13014<T[P]>;
};

type UnionToIntersection13014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13014<T> = UnionToIntersection13014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13014<T extends unknown[], V> = [...T, V];

type TuplifyUnion13014<T, L = LastOf13014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13014<TuplifyUnion13014<Exclude<T, L>>, L>;

type DeepPartial13014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13014<T[P]> }
  : T;

type Paths13014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13014<K, Paths13014<T[K], Prev13014[D]>> : never }[keyof T]
  : never;

type Prev13014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13014 {
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

type ConfigPaths13014 = Paths13014<NestedConfig13014>;

interface HeavyProps13014 {
  config: DeepPartial13014<NestedConfig13014>;
  path?: ConfigPaths13014;
}

const HeavyComponent13014 = memo(function HeavyComponent13014({ config }: HeavyProps13014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13014.displayName = 'HeavyComponent13014';
export default HeavyComponent13014;
