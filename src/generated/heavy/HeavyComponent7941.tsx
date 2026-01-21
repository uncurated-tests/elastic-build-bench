'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7941<T> = T extends (infer U)[]
  ? DeepReadonlyArray7941<U>
  : T extends object
  ? DeepReadonlyObject7941<T>
  : T;

interface DeepReadonlyArray7941<T> extends ReadonlyArray<DeepReadonly7941<T>> {}

type DeepReadonlyObject7941<T> = {
  readonly [P in keyof T]: DeepReadonly7941<T[P]>;
};

type UnionToIntersection7941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7941<T> = UnionToIntersection7941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7941<T extends unknown[], V> = [...T, V];

type TuplifyUnion7941<T, L = LastOf7941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7941<TuplifyUnion7941<Exclude<T, L>>, L>;

type DeepPartial7941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7941<T[P]> }
  : T;

type Paths7941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7941<K, Paths7941<T[K], Prev7941[D]>> : never }[keyof T]
  : never;

type Prev7941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7941 {
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

type ConfigPaths7941 = Paths7941<NestedConfig7941>;

interface HeavyProps7941 {
  config: DeepPartial7941<NestedConfig7941>;
  path?: ConfigPaths7941;
}

const HeavyComponent7941 = memo(function HeavyComponent7941({ config }: HeavyProps7941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7941.displayName = 'HeavyComponent7941';
export default HeavyComponent7941;
