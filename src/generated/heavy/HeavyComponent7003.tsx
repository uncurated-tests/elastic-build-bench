'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7003<T> = T extends (infer U)[]
  ? DeepReadonlyArray7003<U>
  : T extends object
  ? DeepReadonlyObject7003<T>
  : T;

interface DeepReadonlyArray7003<T> extends ReadonlyArray<DeepReadonly7003<T>> {}

type DeepReadonlyObject7003<T> = {
  readonly [P in keyof T]: DeepReadonly7003<T[P]>;
};

type UnionToIntersection7003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7003<T> = UnionToIntersection7003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7003<T extends unknown[], V> = [...T, V];

type TuplifyUnion7003<T, L = LastOf7003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7003<TuplifyUnion7003<Exclude<T, L>>, L>;

type DeepPartial7003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7003<T[P]> }
  : T;

type Paths7003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7003<K, Paths7003<T[K], Prev7003[D]>> : never }[keyof T]
  : never;

type Prev7003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7003 {
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

type ConfigPaths7003 = Paths7003<NestedConfig7003>;

interface HeavyProps7003 {
  config: DeepPartial7003<NestedConfig7003>;
  path?: ConfigPaths7003;
}

const HeavyComponent7003 = memo(function HeavyComponent7003({ config }: HeavyProps7003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7003.displayName = 'HeavyComponent7003';
export default HeavyComponent7003;
