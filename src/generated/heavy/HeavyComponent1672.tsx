'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1672<T> = T extends (infer U)[]
  ? DeepReadonlyArray1672<U>
  : T extends object
  ? DeepReadonlyObject1672<T>
  : T;

interface DeepReadonlyArray1672<T> extends ReadonlyArray<DeepReadonly1672<T>> {}

type DeepReadonlyObject1672<T> = {
  readonly [P in keyof T]: DeepReadonly1672<T[P]>;
};

type UnionToIntersection1672<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1672<T> = UnionToIntersection1672<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1672<T extends unknown[], V> = [...T, V];

type TuplifyUnion1672<T, L = LastOf1672<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1672<TuplifyUnion1672<Exclude<T, L>>, L>;

type DeepPartial1672<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1672<T[P]> }
  : T;

type Paths1672<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1672<K, Paths1672<T[K], Prev1672[D]>> : never }[keyof T]
  : never;

type Prev1672 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1672<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1672 {
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

type ConfigPaths1672 = Paths1672<NestedConfig1672>;

interface HeavyProps1672 {
  config: DeepPartial1672<NestedConfig1672>;
  path?: ConfigPaths1672;
}

const HeavyComponent1672 = memo(function HeavyComponent1672({ config }: HeavyProps1672) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1672) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1672 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1672: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1672.displayName = 'HeavyComponent1672';
export default HeavyComponent1672;
