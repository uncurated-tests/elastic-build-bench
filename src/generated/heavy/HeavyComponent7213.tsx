'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7213<T> = T extends (infer U)[]
  ? DeepReadonlyArray7213<U>
  : T extends object
  ? DeepReadonlyObject7213<T>
  : T;

interface DeepReadonlyArray7213<T> extends ReadonlyArray<DeepReadonly7213<T>> {}

type DeepReadonlyObject7213<T> = {
  readonly [P in keyof T]: DeepReadonly7213<T[P]>;
};

type UnionToIntersection7213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7213<T> = UnionToIntersection7213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7213<T extends unknown[], V> = [...T, V];

type TuplifyUnion7213<T, L = LastOf7213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7213<TuplifyUnion7213<Exclude<T, L>>, L>;

type DeepPartial7213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7213<T[P]> }
  : T;

type Paths7213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7213<K, Paths7213<T[K], Prev7213[D]>> : never }[keyof T]
  : never;

type Prev7213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7213 {
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

type ConfigPaths7213 = Paths7213<NestedConfig7213>;

interface HeavyProps7213 {
  config: DeepPartial7213<NestedConfig7213>;
  path?: ConfigPaths7213;
}

const HeavyComponent7213 = memo(function HeavyComponent7213({ config }: HeavyProps7213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7213.displayName = 'HeavyComponent7213';
export default HeavyComponent7213;
