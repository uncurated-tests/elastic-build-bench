'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly52<T> = T extends (infer U)[]
  ? DeepReadonlyArray52<U>
  : T extends object
  ? DeepReadonlyObject52<T>
  : T;

interface DeepReadonlyArray52<T> extends ReadonlyArray<DeepReadonly52<T>> {}

type DeepReadonlyObject52<T> = {
  readonly [P in keyof T]: DeepReadonly52<T[P]>;
};

type UnionToIntersection52<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf52<T> = UnionToIntersection52<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push52<T extends unknown[], V> = [...T, V];

type TuplifyUnion52<T, L = LastOf52<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push52<TuplifyUnion52<Exclude<T, L>>, L>;

type DeepPartial52<T> = T extends object
  ? { [P in keyof T]?: DeepPartial52<T[P]> }
  : T;

type Paths52<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join52<K, Paths52<T[K], Prev52[D]>> : never }[keyof T]
  : never;

type Prev52 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join52<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig52 {
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

type ConfigPaths52 = Paths52<NestedConfig52>;

interface HeavyProps52 {
  config: DeepPartial52<NestedConfig52>;
  path?: ConfigPaths52;
}

const HeavyComponent52 = memo(function HeavyComponent52({ config }: HeavyProps52) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 52) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-52 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H52: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent52.displayName = 'HeavyComponent52';
export default HeavyComponent52;
