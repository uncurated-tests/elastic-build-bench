'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7226<T> = T extends (infer U)[]
  ? DeepReadonlyArray7226<U>
  : T extends object
  ? DeepReadonlyObject7226<T>
  : T;

interface DeepReadonlyArray7226<T> extends ReadonlyArray<DeepReadonly7226<T>> {}

type DeepReadonlyObject7226<T> = {
  readonly [P in keyof T]: DeepReadonly7226<T[P]>;
};

type UnionToIntersection7226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7226<T> = UnionToIntersection7226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7226<T extends unknown[], V> = [...T, V];

type TuplifyUnion7226<T, L = LastOf7226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7226<TuplifyUnion7226<Exclude<T, L>>, L>;

type DeepPartial7226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7226<T[P]> }
  : T;

type Paths7226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7226<K, Paths7226<T[K], Prev7226[D]>> : never }[keyof T]
  : never;

type Prev7226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7226 {
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

type ConfigPaths7226 = Paths7226<NestedConfig7226>;

interface HeavyProps7226 {
  config: DeepPartial7226<NestedConfig7226>;
  path?: ConfigPaths7226;
}

const HeavyComponent7226 = memo(function HeavyComponent7226({ config }: HeavyProps7226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7226.displayName = 'HeavyComponent7226';
export default HeavyComponent7226;
