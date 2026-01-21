'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7673<T> = T extends (infer U)[]
  ? DeepReadonlyArray7673<U>
  : T extends object
  ? DeepReadonlyObject7673<T>
  : T;

interface DeepReadonlyArray7673<T> extends ReadonlyArray<DeepReadonly7673<T>> {}

type DeepReadonlyObject7673<T> = {
  readonly [P in keyof T]: DeepReadonly7673<T[P]>;
};

type UnionToIntersection7673<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7673<T> = UnionToIntersection7673<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7673<T extends unknown[], V> = [...T, V];

type TuplifyUnion7673<T, L = LastOf7673<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7673<TuplifyUnion7673<Exclude<T, L>>, L>;

type DeepPartial7673<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7673<T[P]> }
  : T;

type Paths7673<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7673<K, Paths7673<T[K], Prev7673[D]>> : never }[keyof T]
  : never;

type Prev7673 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7673<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7673 {
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

type ConfigPaths7673 = Paths7673<NestedConfig7673>;

interface HeavyProps7673 {
  config: DeepPartial7673<NestedConfig7673>;
  path?: ConfigPaths7673;
}

const HeavyComponent7673 = memo(function HeavyComponent7673({ config }: HeavyProps7673) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7673) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7673 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7673: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7673.displayName = 'HeavyComponent7673';
export default HeavyComponent7673;
