'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13636<T> = T extends (infer U)[]
  ? DeepReadonlyArray13636<U>
  : T extends object
  ? DeepReadonlyObject13636<T>
  : T;

interface DeepReadonlyArray13636<T> extends ReadonlyArray<DeepReadonly13636<T>> {}

type DeepReadonlyObject13636<T> = {
  readonly [P in keyof T]: DeepReadonly13636<T[P]>;
};

type UnionToIntersection13636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13636<T> = UnionToIntersection13636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13636<T extends unknown[], V> = [...T, V];

type TuplifyUnion13636<T, L = LastOf13636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13636<TuplifyUnion13636<Exclude<T, L>>, L>;

type DeepPartial13636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13636<T[P]> }
  : T;

type Paths13636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13636<K, Paths13636<T[K], Prev13636[D]>> : never }[keyof T]
  : never;

type Prev13636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13636 {
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

type ConfigPaths13636 = Paths13636<NestedConfig13636>;

interface HeavyProps13636 {
  config: DeepPartial13636<NestedConfig13636>;
  path?: ConfigPaths13636;
}

const HeavyComponent13636 = memo(function HeavyComponent13636({ config }: HeavyProps13636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13636.displayName = 'HeavyComponent13636';
export default HeavyComponent13636;
