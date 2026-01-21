'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7297<T> = T extends (infer U)[]
  ? DeepReadonlyArray7297<U>
  : T extends object
  ? DeepReadonlyObject7297<T>
  : T;

interface DeepReadonlyArray7297<T> extends ReadonlyArray<DeepReadonly7297<T>> {}

type DeepReadonlyObject7297<T> = {
  readonly [P in keyof T]: DeepReadonly7297<T[P]>;
};

type UnionToIntersection7297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7297<T> = UnionToIntersection7297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7297<T extends unknown[], V> = [...T, V];

type TuplifyUnion7297<T, L = LastOf7297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7297<TuplifyUnion7297<Exclude<T, L>>, L>;

type DeepPartial7297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7297<T[P]> }
  : T;

type Paths7297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7297<K, Paths7297<T[K], Prev7297[D]>> : never }[keyof T]
  : never;

type Prev7297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7297 {
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

type ConfigPaths7297 = Paths7297<NestedConfig7297>;

interface HeavyProps7297 {
  config: DeepPartial7297<NestedConfig7297>;
  path?: ConfigPaths7297;
}

const HeavyComponent7297 = memo(function HeavyComponent7297({ config }: HeavyProps7297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7297.displayName = 'HeavyComponent7297';
export default HeavyComponent7297;
