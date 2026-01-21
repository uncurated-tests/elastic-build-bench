'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13583<T> = T extends (infer U)[]
  ? DeepReadonlyArray13583<U>
  : T extends object
  ? DeepReadonlyObject13583<T>
  : T;

interface DeepReadonlyArray13583<T> extends ReadonlyArray<DeepReadonly13583<T>> {}

type DeepReadonlyObject13583<T> = {
  readonly [P in keyof T]: DeepReadonly13583<T[P]>;
};

type UnionToIntersection13583<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13583<T> = UnionToIntersection13583<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13583<T extends unknown[], V> = [...T, V];

type TuplifyUnion13583<T, L = LastOf13583<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13583<TuplifyUnion13583<Exclude<T, L>>, L>;

type DeepPartial13583<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13583<T[P]> }
  : T;

type Paths13583<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13583<K, Paths13583<T[K], Prev13583[D]>> : never }[keyof T]
  : never;

type Prev13583 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13583<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13583 {
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

type ConfigPaths13583 = Paths13583<NestedConfig13583>;

interface HeavyProps13583 {
  config: DeepPartial13583<NestedConfig13583>;
  path?: ConfigPaths13583;
}

const HeavyComponent13583 = memo(function HeavyComponent13583({ config }: HeavyProps13583) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13583) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13583 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13583: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13583.displayName = 'HeavyComponent13583';
export default HeavyComponent13583;
