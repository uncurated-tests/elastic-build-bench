'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13592<T> = T extends (infer U)[]
  ? DeepReadonlyArray13592<U>
  : T extends object
  ? DeepReadonlyObject13592<T>
  : T;

interface DeepReadonlyArray13592<T> extends ReadonlyArray<DeepReadonly13592<T>> {}

type DeepReadonlyObject13592<T> = {
  readonly [P in keyof T]: DeepReadonly13592<T[P]>;
};

type UnionToIntersection13592<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13592<T> = UnionToIntersection13592<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13592<T extends unknown[], V> = [...T, V];

type TuplifyUnion13592<T, L = LastOf13592<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13592<TuplifyUnion13592<Exclude<T, L>>, L>;

type DeepPartial13592<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13592<T[P]> }
  : T;

type Paths13592<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13592<K, Paths13592<T[K], Prev13592[D]>> : never }[keyof T]
  : never;

type Prev13592 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13592<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13592 {
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

type ConfigPaths13592 = Paths13592<NestedConfig13592>;

interface HeavyProps13592 {
  config: DeepPartial13592<NestedConfig13592>;
  path?: ConfigPaths13592;
}

const HeavyComponent13592 = memo(function HeavyComponent13592({ config }: HeavyProps13592) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13592) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13592 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13592: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13592.displayName = 'HeavyComponent13592';
export default HeavyComponent13592;
