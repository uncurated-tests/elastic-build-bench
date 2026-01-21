'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13174<T> = T extends (infer U)[]
  ? DeepReadonlyArray13174<U>
  : T extends object
  ? DeepReadonlyObject13174<T>
  : T;

interface DeepReadonlyArray13174<T> extends ReadonlyArray<DeepReadonly13174<T>> {}

type DeepReadonlyObject13174<T> = {
  readonly [P in keyof T]: DeepReadonly13174<T[P]>;
};

type UnionToIntersection13174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13174<T> = UnionToIntersection13174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13174<T extends unknown[], V> = [...T, V];

type TuplifyUnion13174<T, L = LastOf13174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13174<TuplifyUnion13174<Exclude<T, L>>, L>;

type DeepPartial13174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13174<T[P]> }
  : T;

type Paths13174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13174<K, Paths13174<T[K], Prev13174[D]>> : never }[keyof T]
  : never;

type Prev13174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13174 {
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

type ConfigPaths13174 = Paths13174<NestedConfig13174>;

interface HeavyProps13174 {
  config: DeepPartial13174<NestedConfig13174>;
  path?: ConfigPaths13174;
}

const HeavyComponent13174 = memo(function HeavyComponent13174({ config }: HeavyProps13174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13174.displayName = 'HeavyComponent13174';
export default HeavyComponent13174;
