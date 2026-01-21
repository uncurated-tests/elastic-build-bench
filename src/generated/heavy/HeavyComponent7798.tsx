'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7798<T> = T extends (infer U)[]
  ? DeepReadonlyArray7798<U>
  : T extends object
  ? DeepReadonlyObject7798<T>
  : T;

interface DeepReadonlyArray7798<T> extends ReadonlyArray<DeepReadonly7798<T>> {}

type DeepReadonlyObject7798<T> = {
  readonly [P in keyof T]: DeepReadonly7798<T[P]>;
};

type UnionToIntersection7798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7798<T> = UnionToIntersection7798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7798<T extends unknown[], V> = [...T, V];

type TuplifyUnion7798<T, L = LastOf7798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7798<TuplifyUnion7798<Exclude<T, L>>, L>;

type DeepPartial7798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7798<T[P]> }
  : T;

type Paths7798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7798<K, Paths7798<T[K], Prev7798[D]>> : never }[keyof T]
  : never;

type Prev7798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7798 {
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

type ConfigPaths7798 = Paths7798<NestedConfig7798>;

interface HeavyProps7798 {
  config: DeepPartial7798<NestedConfig7798>;
  path?: ConfigPaths7798;
}

const HeavyComponent7798 = memo(function HeavyComponent7798({ config }: HeavyProps7798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7798.displayName = 'HeavyComponent7798';
export default HeavyComponent7798;
