'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7275<T> = T extends (infer U)[]
  ? DeepReadonlyArray7275<U>
  : T extends object
  ? DeepReadonlyObject7275<T>
  : T;

interface DeepReadonlyArray7275<T> extends ReadonlyArray<DeepReadonly7275<T>> {}

type DeepReadonlyObject7275<T> = {
  readonly [P in keyof T]: DeepReadonly7275<T[P]>;
};

type UnionToIntersection7275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7275<T> = UnionToIntersection7275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7275<T extends unknown[], V> = [...T, V];

type TuplifyUnion7275<T, L = LastOf7275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7275<TuplifyUnion7275<Exclude<T, L>>, L>;

type DeepPartial7275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7275<T[P]> }
  : T;

type Paths7275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7275<K, Paths7275<T[K], Prev7275[D]>> : never }[keyof T]
  : never;

type Prev7275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7275 {
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

type ConfigPaths7275 = Paths7275<NestedConfig7275>;

interface HeavyProps7275 {
  config: DeepPartial7275<NestedConfig7275>;
  path?: ConfigPaths7275;
}

const HeavyComponent7275 = memo(function HeavyComponent7275({ config }: HeavyProps7275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7275.displayName = 'HeavyComponent7275';
export default HeavyComponent7275;
