'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13189<T> = T extends (infer U)[]
  ? DeepReadonlyArray13189<U>
  : T extends object
  ? DeepReadonlyObject13189<T>
  : T;

interface DeepReadonlyArray13189<T> extends ReadonlyArray<DeepReadonly13189<T>> {}

type DeepReadonlyObject13189<T> = {
  readonly [P in keyof T]: DeepReadonly13189<T[P]>;
};

type UnionToIntersection13189<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13189<T> = UnionToIntersection13189<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13189<T extends unknown[], V> = [...T, V];

type TuplifyUnion13189<T, L = LastOf13189<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13189<TuplifyUnion13189<Exclude<T, L>>, L>;

type DeepPartial13189<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13189<T[P]> }
  : T;

type Paths13189<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13189<K, Paths13189<T[K], Prev13189[D]>> : never }[keyof T]
  : never;

type Prev13189 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13189<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13189 {
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

type ConfigPaths13189 = Paths13189<NestedConfig13189>;

interface HeavyProps13189 {
  config: DeepPartial13189<NestedConfig13189>;
  path?: ConfigPaths13189;
}

const HeavyComponent13189 = memo(function HeavyComponent13189({ config }: HeavyProps13189) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13189) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13189 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13189: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13189.displayName = 'HeavyComponent13189';
export default HeavyComponent13189;
