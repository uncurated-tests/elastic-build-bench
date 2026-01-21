'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7364<T> = T extends (infer U)[]
  ? DeepReadonlyArray7364<U>
  : T extends object
  ? DeepReadonlyObject7364<T>
  : T;

interface DeepReadonlyArray7364<T> extends ReadonlyArray<DeepReadonly7364<T>> {}

type DeepReadonlyObject7364<T> = {
  readonly [P in keyof T]: DeepReadonly7364<T[P]>;
};

type UnionToIntersection7364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7364<T> = UnionToIntersection7364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7364<T extends unknown[], V> = [...T, V];

type TuplifyUnion7364<T, L = LastOf7364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7364<TuplifyUnion7364<Exclude<T, L>>, L>;

type DeepPartial7364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7364<T[P]> }
  : T;

type Paths7364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7364<K, Paths7364<T[K], Prev7364[D]>> : never }[keyof T]
  : never;

type Prev7364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7364 {
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

type ConfigPaths7364 = Paths7364<NestedConfig7364>;

interface HeavyProps7364 {
  config: DeepPartial7364<NestedConfig7364>;
  path?: ConfigPaths7364;
}

const HeavyComponent7364 = memo(function HeavyComponent7364({ config }: HeavyProps7364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7364.displayName = 'HeavyComponent7364';
export default HeavyComponent7364;
