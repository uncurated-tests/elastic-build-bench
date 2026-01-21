'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1744<T> = T extends (infer U)[]
  ? DeepReadonlyArray1744<U>
  : T extends object
  ? DeepReadonlyObject1744<T>
  : T;

interface DeepReadonlyArray1744<T> extends ReadonlyArray<DeepReadonly1744<T>> {}

type DeepReadonlyObject1744<T> = {
  readonly [P in keyof T]: DeepReadonly1744<T[P]>;
};

type UnionToIntersection1744<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1744<T> = UnionToIntersection1744<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1744<T extends unknown[], V> = [...T, V];

type TuplifyUnion1744<T, L = LastOf1744<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1744<TuplifyUnion1744<Exclude<T, L>>, L>;

type DeepPartial1744<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1744<T[P]> }
  : T;

type Paths1744<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1744<K, Paths1744<T[K], Prev1744[D]>> : never }[keyof T]
  : never;

type Prev1744 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1744<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1744 {
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

type ConfigPaths1744 = Paths1744<NestedConfig1744>;

interface HeavyProps1744 {
  config: DeepPartial1744<NestedConfig1744>;
  path?: ConfigPaths1744;
}

const HeavyComponent1744 = memo(function HeavyComponent1744({ config }: HeavyProps1744) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1744) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1744 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1744: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1744.displayName = 'HeavyComponent1744';
export default HeavyComponent1744;
