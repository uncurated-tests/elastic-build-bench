'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7289<T> = T extends (infer U)[]
  ? DeepReadonlyArray7289<U>
  : T extends object
  ? DeepReadonlyObject7289<T>
  : T;

interface DeepReadonlyArray7289<T> extends ReadonlyArray<DeepReadonly7289<T>> {}

type DeepReadonlyObject7289<T> = {
  readonly [P in keyof T]: DeepReadonly7289<T[P]>;
};

type UnionToIntersection7289<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7289<T> = UnionToIntersection7289<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7289<T extends unknown[], V> = [...T, V];

type TuplifyUnion7289<T, L = LastOf7289<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7289<TuplifyUnion7289<Exclude<T, L>>, L>;

type DeepPartial7289<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7289<T[P]> }
  : T;

type Paths7289<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7289<K, Paths7289<T[K], Prev7289[D]>> : never }[keyof T]
  : never;

type Prev7289 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7289<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7289 {
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

type ConfigPaths7289 = Paths7289<NestedConfig7289>;

interface HeavyProps7289 {
  config: DeepPartial7289<NestedConfig7289>;
  path?: ConfigPaths7289;
}

const HeavyComponent7289 = memo(function HeavyComponent7289({ config }: HeavyProps7289) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7289) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7289 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7289: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7289.displayName = 'HeavyComponent7289';
export default HeavyComponent7289;
