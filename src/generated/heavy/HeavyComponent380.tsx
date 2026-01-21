'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly380<T> = T extends (infer U)[]
  ? DeepReadonlyArray380<U>
  : T extends object
  ? DeepReadonlyObject380<T>
  : T;

interface DeepReadonlyArray380<T> extends ReadonlyArray<DeepReadonly380<T>> {}

type DeepReadonlyObject380<T> = {
  readonly [P in keyof T]: DeepReadonly380<T[P]>;
};

type UnionToIntersection380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf380<T> = UnionToIntersection380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push380<T extends unknown[], V> = [...T, V];

type TuplifyUnion380<T, L = LastOf380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push380<TuplifyUnion380<Exclude<T, L>>, L>;

type DeepPartial380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial380<T[P]> }
  : T;

type Paths380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join380<K, Paths380<T[K], Prev380[D]>> : never }[keyof T]
  : never;

type Prev380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig380 {
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

type ConfigPaths380 = Paths380<NestedConfig380>;

interface HeavyProps380 {
  config: DeepPartial380<NestedConfig380>;
  path?: ConfigPaths380;
}

const HeavyComponent380 = memo(function HeavyComponent380({ config }: HeavyProps380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent380.displayName = 'HeavyComponent380';
export default HeavyComponent380;
