'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7536<T> = T extends (infer U)[]
  ? DeepReadonlyArray7536<U>
  : T extends object
  ? DeepReadonlyObject7536<T>
  : T;

interface DeepReadonlyArray7536<T> extends ReadonlyArray<DeepReadonly7536<T>> {}

type DeepReadonlyObject7536<T> = {
  readonly [P in keyof T]: DeepReadonly7536<T[P]>;
};

type UnionToIntersection7536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7536<T> = UnionToIntersection7536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7536<T extends unknown[], V> = [...T, V];

type TuplifyUnion7536<T, L = LastOf7536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7536<TuplifyUnion7536<Exclude<T, L>>, L>;

type DeepPartial7536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7536<T[P]> }
  : T;

type Paths7536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7536<K, Paths7536<T[K], Prev7536[D]>> : never }[keyof T]
  : never;

type Prev7536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7536 {
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

type ConfigPaths7536 = Paths7536<NestedConfig7536>;

interface HeavyProps7536 {
  config: DeepPartial7536<NestedConfig7536>;
  path?: ConfigPaths7536;
}

const HeavyComponent7536 = memo(function HeavyComponent7536({ config }: HeavyProps7536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7536.displayName = 'HeavyComponent7536';
export default HeavyComponent7536;
