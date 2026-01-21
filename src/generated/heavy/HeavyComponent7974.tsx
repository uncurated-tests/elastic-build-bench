'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7974<T> = T extends (infer U)[]
  ? DeepReadonlyArray7974<U>
  : T extends object
  ? DeepReadonlyObject7974<T>
  : T;

interface DeepReadonlyArray7974<T> extends ReadonlyArray<DeepReadonly7974<T>> {}

type DeepReadonlyObject7974<T> = {
  readonly [P in keyof T]: DeepReadonly7974<T[P]>;
};

type UnionToIntersection7974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7974<T> = UnionToIntersection7974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7974<T extends unknown[], V> = [...T, V];

type TuplifyUnion7974<T, L = LastOf7974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7974<TuplifyUnion7974<Exclude<T, L>>, L>;

type DeepPartial7974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7974<T[P]> }
  : T;

type Paths7974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7974<K, Paths7974<T[K], Prev7974[D]>> : never }[keyof T]
  : never;

type Prev7974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7974 {
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

type ConfigPaths7974 = Paths7974<NestedConfig7974>;

interface HeavyProps7974 {
  config: DeepPartial7974<NestedConfig7974>;
  path?: ConfigPaths7974;
}

const HeavyComponent7974 = memo(function HeavyComponent7974({ config }: HeavyProps7974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7974.displayName = 'HeavyComponent7974';
export default HeavyComponent7974;
