'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7953<T> = T extends (infer U)[]
  ? DeepReadonlyArray7953<U>
  : T extends object
  ? DeepReadonlyObject7953<T>
  : T;

interface DeepReadonlyArray7953<T> extends ReadonlyArray<DeepReadonly7953<T>> {}

type DeepReadonlyObject7953<T> = {
  readonly [P in keyof T]: DeepReadonly7953<T[P]>;
};

type UnionToIntersection7953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7953<T> = UnionToIntersection7953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7953<T extends unknown[], V> = [...T, V];

type TuplifyUnion7953<T, L = LastOf7953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7953<TuplifyUnion7953<Exclude<T, L>>, L>;

type DeepPartial7953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7953<T[P]> }
  : T;

type Paths7953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7953<K, Paths7953<T[K], Prev7953[D]>> : never }[keyof T]
  : never;

type Prev7953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7953 {
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

type ConfigPaths7953 = Paths7953<NestedConfig7953>;

interface HeavyProps7953 {
  config: DeepPartial7953<NestedConfig7953>;
  path?: ConfigPaths7953;
}

const HeavyComponent7953 = memo(function HeavyComponent7953({ config }: HeavyProps7953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7953.displayName = 'HeavyComponent7953';
export default HeavyComponent7953;
