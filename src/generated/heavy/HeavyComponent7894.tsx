'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7894<T> = T extends (infer U)[]
  ? DeepReadonlyArray7894<U>
  : T extends object
  ? DeepReadonlyObject7894<T>
  : T;

interface DeepReadonlyArray7894<T> extends ReadonlyArray<DeepReadonly7894<T>> {}

type DeepReadonlyObject7894<T> = {
  readonly [P in keyof T]: DeepReadonly7894<T[P]>;
};

type UnionToIntersection7894<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7894<T> = UnionToIntersection7894<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7894<T extends unknown[], V> = [...T, V];

type TuplifyUnion7894<T, L = LastOf7894<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7894<TuplifyUnion7894<Exclude<T, L>>, L>;

type DeepPartial7894<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7894<T[P]> }
  : T;

type Paths7894<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7894<K, Paths7894<T[K], Prev7894[D]>> : never }[keyof T]
  : never;

type Prev7894 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7894<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7894 {
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

type ConfigPaths7894 = Paths7894<NestedConfig7894>;

interface HeavyProps7894 {
  config: DeepPartial7894<NestedConfig7894>;
  path?: ConfigPaths7894;
}

const HeavyComponent7894 = memo(function HeavyComponent7894({ config }: HeavyProps7894) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7894) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7894 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7894: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7894.displayName = 'HeavyComponent7894';
export default HeavyComponent7894;
