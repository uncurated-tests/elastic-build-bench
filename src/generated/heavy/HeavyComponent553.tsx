'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly553<T> = T extends (infer U)[]
  ? DeepReadonlyArray553<U>
  : T extends object
  ? DeepReadonlyObject553<T>
  : T;

interface DeepReadonlyArray553<T> extends ReadonlyArray<DeepReadonly553<T>> {}

type DeepReadonlyObject553<T> = {
  readonly [P in keyof T]: DeepReadonly553<T[P]>;
};

type UnionToIntersection553<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf553<T> = UnionToIntersection553<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push553<T extends unknown[], V> = [...T, V];

type TuplifyUnion553<T, L = LastOf553<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push553<TuplifyUnion553<Exclude<T, L>>, L>;

type DeepPartial553<T> = T extends object
  ? { [P in keyof T]?: DeepPartial553<T[P]> }
  : T;

type Paths553<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join553<K, Paths553<T[K], Prev553[D]>> : never }[keyof T]
  : never;

type Prev553 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join553<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig553 {
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

type ConfigPaths553 = Paths553<NestedConfig553>;

interface HeavyProps553 {
  config: DeepPartial553<NestedConfig553>;
  path?: ConfigPaths553;
}

const HeavyComponent553 = memo(function HeavyComponent553({ config }: HeavyProps553) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 553) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-553 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H553: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent553.displayName = 'HeavyComponent553';
export default HeavyComponent553;
