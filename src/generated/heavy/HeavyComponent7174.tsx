'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7174<T> = T extends (infer U)[]
  ? DeepReadonlyArray7174<U>
  : T extends object
  ? DeepReadonlyObject7174<T>
  : T;

interface DeepReadonlyArray7174<T> extends ReadonlyArray<DeepReadonly7174<T>> {}

type DeepReadonlyObject7174<T> = {
  readonly [P in keyof T]: DeepReadonly7174<T[P]>;
};

type UnionToIntersection7174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7174<T> = UnionToIntersection7174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7174<T extends unknown[], V> = [...T, V];

type TuplifyUnion7174<T, L = LastOf7174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7174<TuplifyUnion7174<Exclude<T, L>>, L>;

type DeepPartial7174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7174<T[P]> }
  : T;

type Paths7174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7174<K, Paths7174<T[K], Prev7174[D]>> : never }[keyof T]
  : never;

type Prev7174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7174 {
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

type ConfigPaths7174 = Paths7174<NestedConfig7174>;

interface HeavyProps7174 {
  config: DeepPartial7174<NestedConfig7174>;
  path?: ConfigPaths7174;
}

const HeavyComponent7174 = memo(function HeavyComponent7174({ config }: HeavyProps7174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7174.displayName = 'HeavyComponent7174';
export default HeavyComponent7174;
