'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly376<T> = T extends (infer U)[]
  ? DeepReadonlyArray376<U>
  : T extends object
  ? DeepReadonlyObject376<T>
  : T;

interface DeepReadonlyArray376<T> extends ReadonlyArray<DeepReadonly376<T>> {}

type DeepReadonlyObject376<T> = {
  readonly [P in keyof T]: DeepReadonly376<T[P]>;
};

type UnionToIntersection376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf376<T> = UnionToIntersection376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push376<T extends unknown[], V> = [...T, V];

type TuplifyUnion376<T, L = LastOf376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push376<TuplifyUnion376<Exclude<T, L>>, L>;

type DeepPartial376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial376<T[P]> }
  : T;

type Paths376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join376<K, Paths376<T[K], Prev376[D]>> : never }[keyof T]
  : never;

type Prev376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig376 {
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

type ConfigPaths376 = Paths376<NestedConfig376>;

interface HeavyProps376 {
  config: DeepPartial376<NestedConfig376>;
  path?: ConfigPaths376;
}

const HeavyComponent376 = memo(function HeavyComponent376({ config }: HeavyProps376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent376.displayName = 'HeavyComponent376';
export default HeavyComponent376;
