'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7540<T> = T extends (infer U)[]
  ? DeepReadonlyArray7540<U>
  : T extends object
  ? DeepReadonlyObject7540<T>
  : T;

interface DeepReadonlyArray7540<T> extends ReadonlyArray<DeepReadonly7540<T>> {}

type DeepReadonlyObject7540<T> = {
  readonly [P in keyof T]: DeepReadonly7540<T[P]>;
};

type UnionToIntersection7540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7540<T> = UnionToIntersection7540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7540<T extends unknown[], V> = [...T, V];

type TuplifyUnion7540<T, L = LastOf7540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7540<TuplifyUnion7540<Exclude<T, L>>, L>;

type DeepPartial7540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7540<T[P]> }
  : T;

type Paths7540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7540<K, Paths7540<T[K], Prev7540[D]>> : never }[keyof T]
  : never;

type Prev7540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7540 {
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

type ConfigPaths7540 = Paths7540<NestedConfig7540>;

interface HeavyProps7540 {
  config: DeepPartial7540<NestedConfig7540>;
  path?: ConfigPaths7540;
}

const HeavyComponent7540 = memo(function HeavyComponent7540({ config }: HeavyProps7540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7540.displayName = 'HeavyComponent7540';
export default HeavyComponent7540;
