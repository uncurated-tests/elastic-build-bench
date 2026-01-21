'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7307<T> = T extends (infer U)[]
  ? DeepReadonlyArray7307<U>
  : T extends object
  ? DeepReadonlyObject7307<T>
  : T;

interface DeepReadonlyArray7307<T> extends ReadonlyArray<DeepReadonly7307<T>> {}

type DeepReadonlyObject7307<T> = {
  readonly [P in keyof T]: DeepReadonly7307<T[P]>;
};

type UnionToIntersection7307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7307<T> = UnionToIntersection7307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7307<T extends unknown[], V> = [...T, V];

type TuplifyUnion7307<T, L = LastOf7307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7307<TuplifyUnion7307<Exclude<T, L>>, L>;

type DeepPartial7307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7307<T[P]> }
  : T;

type Paths7307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7307<K, Paths7307<T[K], Prev7307[D]>> : never }[keyof T]
  : never;

type Prev7307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7307 {
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

type ConfigPaths7307 = Paths7307<NestedConfig7307>;

interface HeavyProps7307 {
  config: DeepPartial7307<NestedConfig7307>;
  path?: ConfigPaths7307;
}

const HeavyComponent7307 = memo(function HeavyComponent7307({ config }: HeavyProps7307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7307.displayName = 'HeavyComponent7307';
export default HeavyComponent7307;
