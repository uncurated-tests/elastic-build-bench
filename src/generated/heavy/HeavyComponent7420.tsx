'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7420<T> = T extends (infer U)[]
  ? DeepReadonlyArray7420<U>
  : T extends object
  ? DeepReadonlyObject7420<T>
  : T;

interface DeepReadonlyArray7420<T> extends ReadonlyArray<DeepReadonly7420<T>> {}

type DeepReadonlyObject7420<T> = {
  readonly [P in keyof T]: DeepReadonly7420<T[P]>;
};

type UnionToIntersection7420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7420<T> = UnionToIntersection7420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7420<T extends unknown[], V> = [...T, V];

type TuplifyUnion7420<T, L = LastOf7420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7420<TuplifyUnion7420<Exclude<T, L>>, L>;

type DeepPartial7420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7420<T[P]> }
  : T;

type Paths7420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7420<K, Paths7420<T[K], Prev7420[D]>> : never }[keyof T]
  : never;

type Prev7420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7420 {
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

type ConfigPaths7420 = Paths7420<NestedConfig7420>;

interface HeavyProps7420 {
  config: DeepPartial7420<NestedConfig7420>;
  path?: ConfigPaths7420;
}

const HeavyComponent7420 = memo(function HeavyComponent7420({ config }: HeavyProps7420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7420.displayName = 'HeavyComponent7420';
export default HeavyComponent7420;
