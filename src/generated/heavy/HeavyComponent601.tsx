'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly601<T> = T extends (infer U)[]
  ? DeepReadonlyArray601<U>
  : T extends object
  ? DeepReadonlyObject601<T>
  : T;

interface DeepReadonlyArray601<T> extends ReadonlyArray<DeepReadonly601<T>> {}

type DeepReadonlyObject601<T> = {
  readonly [P in keyof T]: DeepReadonly601<T[P]>;
};

type UnionToIntersection601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf601<T> = UnionToIntersection601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push601<T extends unknown[], V> = [...T, V];

type TuplifyUnion601<T, L = LastOf601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push601<TuplifyUnion601<Exclude<T, L>>, L>;

type DeepPartial601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial601<T[P]> }
  : T;

type Paths601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join601<K, Paths601<T[K], Prev601[D]>> : never }[keyof T]
  : never;

type Prev601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig601 {
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

type ConfigPaths601 = Paths601<NestedConfig601>;

interface HeavyProps601 {
  config: DeepPartial601<NestedConfig601>;
  path?: ConfigPaths601;
}

const HeavyComponent601 = memo(function HeavyComponent601({ config }: HeavyProps601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent601.displayName = 'HeavyComponent601';
export default HeavyComponent601;
