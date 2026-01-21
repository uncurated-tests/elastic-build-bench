'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1376<T> = T extends (infer U)[]
  ? DeepReadonlyArray1376<U>
  : T extends object
  ? DeepReadonlyObject1376<T>
  : T;

interface DeepReadonlyArray1376<T> extends ReadonlyArray<DeepReadonly1376<T>> {}

type DeepReadonlyObject1376<T> = {
  readonly [P in keyof T]: DeepReadonly1376<T[P]>;
};

type UnionToIntersection1376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1376<T> = UnionToIntersection1376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1376<T extends unknown[], V> = [...T, V];

type TuplifyUnion1376<T, L = LastOf1376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1376<TuplifyUnion1376<Exclude<T, L>>, L>;

type DeepPartial1376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1376<T[P]> }
  : T;

type Paths1376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1376<K, Paths1376<T[K], Prev1376[D]>> : never }[keyof T]
  : never;

type Prev1376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1376 {
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

type ConfigPaths1376 = Paths1376<NestedConfig1376>;

interface HeavyProps1376 {
  config: DeepPartial1376<NestedConfig1376>;
  path?: ConfigPaths1376;
}

const HeavyComponent1376 = memo(function HeavyComponent1376({ config }: HeavyProps1376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1376.displayName = 'HeavyComponent1376';
export default HeavyComponent1376;
