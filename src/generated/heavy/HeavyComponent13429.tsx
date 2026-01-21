'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13429<T> = T extends (infer U)[]
  ? DeepReadonlyArray13429<U>
  : T extends object
  ? DeepReadonlyObject13429<T>
  : T;

interface DeepReadonlyArray13429<T> extends ReadonlyArray<DeepReadonly13429<T>> {}

type DeepReadonlyObject13429<T> = {
  readonly [P in keyof T]: DeepReadonly13429<T[P]>;
};

type UnionToIntersection13429<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13429<T> = UnionToIntersection13429<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13429<T extends unknown[], V> = [...T, V];

type TuplifyUnion13429<T, L = LastOf13429<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13429<TuplifyUnion13429<Exclude<T, L>>, L>;

type DeepPartial13429<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13429<T[P]> }
  : T;

type Paths13429<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13429<K, Paths13429<T[K], Prev13429[D]>> : never }[keyof T]
  : never;

type Prev13429 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13429<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13429 {
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

type ConfigPaths13429 = Paths13429<NestedConfig13429>;

interface HeavyProps13429 {
  config: DeepPartial13429<NestedConfig13429>;
  path?: ConfigPaths13429;
}

const HeavyComponent13429 = memo(function HeavyComponent13429({ config }: HeavyProps13429) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13429) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13429 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13429: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13429.displayName = 'HeavyComponent13429';
export default HeavyComponent13429;
