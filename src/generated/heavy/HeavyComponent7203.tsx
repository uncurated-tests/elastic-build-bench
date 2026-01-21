'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7203<T> = T extends (infer U)[]
  ? DeepReadonlyArray7203<U>
  : T extends object
  ? DeepReadonlyObject7203<T>
  : T;

interface DeepReadonlyArray7203<T> extends ReadonlyArray<DeepReadonly7203<T>> {}

type DeepReadonlyObject7203<T> = {
  readonly [P in keyof T]: DeepReadonly7203<T[P]>;
};

type UnionToIntersection7203<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7203<T> = UnionToIntersection7203<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7203<T extends unknown[], V> = [...T, V];

type TuplifyUnion7203<T, L = LastOf7203<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7203<TuplifyUnion7203<Exclude<T, L>>, L>;

type DeepPartial7203<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7203<T[P]> }
  : T;

type Paths7203<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7203<K, Paths7203<T[K], Prev7203[D]>> : never }[keyof T]
  : never;

type Prev7203 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7203<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7203 {
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

type ConfigPaths7203 = Paths7203<NestedConfig7203>;

interface HeavyProps7203 {
  config: DeepPartial7203<NestedConfig7203>;
  path?: ConfigPaths7203;
}

const HeavyComponent7203 = memo(function HeavyComponent7203({ config }: HeavyProps7203) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7203) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7203 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7203: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7203.displayName = 'HeavyComponent7203';
export default HeavyComponent7203;
