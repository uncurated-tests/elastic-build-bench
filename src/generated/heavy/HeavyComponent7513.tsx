'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7513<T> = T extends (infer U)[]
  ? DeepReadonlyArray7513<U>
  : T extends object
  ? DeepReadonlyObject7513<T>
  : T;

interface DeepReadonlyArray7513<T> extends ReadonlyArray<DeepReadonly7513<T>> {}

type DeepReadonlyObject7513<T> = {
  readonly [P in keyof T]: DeepReadonly7513<T[P]>;
};

type UnionToIntersection7513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7513<T> = UnionToIntersection7513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7513<T extends unknown[], V> = [...T, V];

type TuplifyUnion7513<T, L = LastOf7513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7513<TuplifyUnion7513<Exclude<T, L>>, L>;

type DeepPartial7513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7513<T[P]> }
  : T;

type Paths7513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7513<K, Paths7513<T[K], Prev7513[D]>> : never }[keyof T]
  : never;

type Prev7513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7513 {
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

type ConfigPaths7513 = Paths7513<NestedConfig7513>;

interface HeavyProps7513 {
  config: DeepPartial7513<NestedConfig7513>;
  path?: ConfigPaths7513;
}

const HeavyComponent7513 = memo(function HeavyComponent7513({ config }: HeavyProps7513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7513.displayName = 'HeavyComponent7513';
export default HeavyComponent7513;
