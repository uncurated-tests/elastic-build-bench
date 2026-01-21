'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13783<T> = T extends (infer U)[]
  ? DeepReadonlyArray13783<U>
  : T extends object
  ? DeepReadonlyObject13783<T>
  : T;

interface DeepReadonlyArray13783<T> extends ReadonlyArray<DeepReadonly13783<T>> {}

type DeepReadonlyObject13783<T> = {
  readonly [P in keyof T]: DeepReadonly13783<T[P]>;
};

type UnionToIntersection13783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13783<T> = UnionToIntersection13783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13783<T extends unknown[], V> = [...T, V];

type TuplifyUnion13783<T, L = LastOf13783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13783<TuplifyUnion13783<Exclude<T, L>>, L>;

type DeepPartial13783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13783<T[P]> }
  : T;

type Paths13783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13783<K, Paths13783<T[K], Prev13783[D]>> : never }[keyof T]
  : never;

type Prev13783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13783 {
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

type ConfigPaths13783 = Paths13783<NestedConfig13783>;

interface HeavyProps13783 {
  config: DeepPartial13783<NestedConfig13783>;
  path?: ConfigPaths13783;
}

const HeavyComponent13783 = memo(function HeavyComponent13783({ config }: HeavyProps13783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13783.displayName = 'HeavyComponent13783';
export default HeavyComponent13783;
