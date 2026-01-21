'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7993<T> = T extends (infer U)[]
  ? DeepReadonlyArray7993<U>
  : T extends object
  ? DeepReadonlyObject7993<T>
  : T;

interface DeepReadonlyArray7993<T> extends ReadonlyArray<DeepReadonly7993<T>> {}

type DeepReadonlyObject7993<T> = {
  readonly [P in keyof T]: DeepReadonly7993<T[P]>;
};

type UnionToIntersection7993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7993<T> = UnionToIntersection7993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7993<T extends unknown[], V> = [...T, V];

type TuplifyUnion7993<T, L = LastOf7993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7993<TuplifyUnion7993<Exclude<T, L>>, L>;

type DeepPartial7993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7993<T[P]> }
  : T;

type Paths7993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7993<K, Paths7993<T[K], Prev7993[D]>> : never }[keyof T]
  : never;

type Prev7993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7993 {
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

type ConfigPaths7993 = Paths7993<NestedConfig7993>;

interface HeavyProps7993 {
  config: DeepPartial7993<NestedConfig7993>;
  path?: ConfigPaths7993;
}

const HeavyComponent7993 = memo(function HeavyComponent7993({ config }: HeavyProps7993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7993.displayName = 'HeavyComponent7993';
export default HeavyComponent7993;
