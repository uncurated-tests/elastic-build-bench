'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7131<T> = T extends (infer U)[]
  ? DeepReadonlyArray7131<U>
  : T extends object
  ? DeepReadonlyObject7131<T>
  : T;

interface DeepReadonlyArray7131<T> extends ReadonlyArray<DeepReadonly7131<T>> {}

type DeepReadonlyObject7131<T> = {
  readonly [P in keyof T]: DeepReadonly7131<T[P]>;
};

type UnionToIntersection7131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7131<T> = UnionToIntersection7131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7131<T extends unknown[], V> = [...T, V];

type TuplifyUnion7131<T, L = LastOf7131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7131<TuplifyUnion7131<Exclude<T, L>>, L>;

type DeepPartial7131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7131<T[P]> }
  : T;

type Paths7131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7131<K, Paths7131<T[K], Prev7131[D]>> : never }[keyof T]
  : never;

type Prev7131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7131 {
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

type ConfigPaths7131 = Paths7131<NestedConfig7131>;

interface HeavyProps7131 {
  config: DeepPartial7131<NestedConfig7131>;
  path?: ConfigPaths7131;
}

const HeavyComponent7131 = memo(function HeavyComponent7131({ config }: HeavyProps7131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7131.displayName = 'HeavyComponent7131';
export default HeavyComponent7131;
