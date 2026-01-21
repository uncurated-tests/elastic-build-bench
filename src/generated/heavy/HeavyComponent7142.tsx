'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7142<T> = T extends (infer U)[]
  ? DeepReadonlyArray7142<U>
  : T extends object
  ? DeepReadonlyObject7142<T>
  : T;

interface DeepReadonlyArray7142<T> extends ReadonlyArray<DeepReadonly7142<T>> {}

type DeepReadonlyObject7142<T> = {
  readonly [P in keyof T]: DeepReadonly7142<T[P]>;
};

type UnionToIntersection7142<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7142<T> = UnionToIntersection7142<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7142<T extends unknown[], V> = [...T, V];

type TuplifyUnion7142<T, L = LastOf7142<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7142<TuplifyUnion7142<Exclude<T, L>>, L>;

type DeepPartial7142<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7142<T[P]> }
  : T;

type Paths7142<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7142<K, Paths7142<T[K], Prev7142[D]>> : never }[keyof T]
  : never;

type Prev7142 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7142<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7142 {
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

type ConfigPaths7142 = Paths7142<NestedConfig7142>;

interface HeavyProps7142 {
  config: DeepPartial7142<NestedConfig7142>;
  path?: ConfigPaths7142;
}

const HeavyComponent7142 = memo(function HeavyComponent7142({ config }: HeavyProps7142) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7142) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7142 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7142: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7142.displayName = 'HeavyComponent7142';
export default HeavyComponent7142;
