'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7973<T> = T extends (infer U)[]
  ? DeepReadonlyArray7973<U>
  : T extends object
  ? DeepReadonlyObject7973<T>
  : T;

interface DeepReadonlyArray7973<T> extends ReadonlyArray<DeepReadonly7973<T>> {}

type DeepReadonlyObject7973<T> = {
  readonly [P in keyof T]: DeepReadonly7973<T[P]>;
};

type UnionToIntersection7973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7973<T> = UnionToIntersection7973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7973<T extends unknown[], V> = [...T, V];

type TuplifyUnion7973<T, L = LastOf7973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7973<TuplifyUnion7973<Exclude<T, L>>, L>;

type DeepPartial7973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7973<T[P]> }
  : T;

type Paths7973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7973<K, Paths7973<T[K], Prev7973[D]>> : never }[keyof T]
  : never;

type Prev7973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7973 {
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

type ConfigPaths7973 = Paths7973<NestedConfig7973>;

interface HeavyProps7973 {
  config: DeepPartial7973<NestedConfig7973>;
  path?: ConfigPaths7973;
}

const HeavyComponent7973 = memo(function HeavyComponent7973({ config }: HeavyProps7973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7973.displayName = 'HeavyComponent7973';
export default HeavyComponent7973;
