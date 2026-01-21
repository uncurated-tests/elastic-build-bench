'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1397<T> = T extends (infer U)[]
  ? DeepReadonlyArray1397<U>
  : T extends object
  ? DeepReadonlyObject1397<T>
  : T;

interface DeepReadonlyArray1397<T> extends ReadonlyArray<DeepReadonly1397<T>> {}

type DeepReadonlyObject1397<T> = {
  readonly [P in keyof T]: DeepReadonly1397<T[P]>;
};

type UnionToIntersection1397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1397<T> = UnionToIntersection1397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1397<T extends unknown[], V> = [...T, V];

type TuplifyUnion1397<T, L = LastOf1397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1397<TuplifyUnion1397<Exclude<T, L>>, L>;

type DeepPartial1397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1397<T[P]> }
  : T;

type Paths1397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1397<K, Paths1397<T[K], Prev1397[D]>> : never }[keyof T]
  : never;

type Prev1397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1397 {
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

type ConfigPaths1397 = Paths1397<NestedConfig1397>;

interface HeavyProps1397 {
  config: DeepPartial1397<NestedConfig1397>;
  path?: ConfigPaths1397;
}

const HeavyComponent1397 = memo(function HeavyComponent1397({ config }: HeavyProps1397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1397.displayName = 'HeavyComponent1397';
export default HeavyComponent1397;
