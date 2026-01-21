'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2601<T> = T extends (infer U)[]
  ? DeepReadonlyArray2601<U>
  : T extends object
  ? DeepReadonlyObject2601<T>
  : T;

interface DeepReadonlyArray2601<T> extends ReadonlyArray<DeepReadonly2601<T>> {}

type DeepReadonlyObject2601<T> = {
  readonly [P in keyof T]: DeepReadonly2601<T[P]>;
};

type UnionToIntersection2601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2601<T> = UnionToIntersection2601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2601<T extends unknown[], V> = [...T, V];

type TuplifyUnion2601<T, L = LastOf2601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2601<TuplifyUnion2601<Exclude<T, L>>, L>;

type DeepPartial2601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2601<T[P]> }
  : T;

type Paths2601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2601<K, Paths2601<T[K], Prev2601[D]>> : never }[keyof T]
  : never;

type Prev2601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2601 {
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

type ConfigPaths2601 = Paths2601<NestedConfig2601>;

interface HeavyProps2601 {
  config: DeepPartial2601<NestedConfig2601>;
  path?: ConfigPaths2601;
}

const HeavyComponent2601 = memo(function HeavyComponent2601({ config }: HeavyProps2601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2601.displayName = 'HeavyComponent2601';
export default HeavyComponent2601;
