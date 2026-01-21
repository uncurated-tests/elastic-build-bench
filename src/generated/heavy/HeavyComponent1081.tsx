'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1081<T> = T extends (infer U)[]
  ? DeepReadonlyArray1081<U>
  : T extends object
  ? DeepReadonlyObject1081<T>
  : T;

interface DeepReadonlyArray1081<T> extends ReadonlyArray<DeepReadonly1081<T>> {}

type DeepReadonlyObject1081<T> = {
  readonly [P in keyof T]: DeepReadonly1081<T[P]>;
};

type UnionToIntersection1081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1081<T> = UnionToIntersection1081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1081<T extends unknown[], V> = [...T, V];

type TuplifyUnion1081<T, L = LastOf1081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1081<TuplifyUnion1081<Exclude<T, L>>, L>;

type DeepPartial1081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1081<T[P]> }
  : T;

type Paths1081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1081<K, Paths1081<T[K], Prev1081[D]>> : never }[keyof T]
  : never;

type Prev1081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1081 {
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

type ConfigPaths1081 = Paths1081<NestedConfig1081>;

interface HeavyProps1081 {
  config: DeepPartial1081<NestedConfig1081>;
  path?: ConfigPaths1081;
}

const HeavyComponent1081 = memo(function HeavyComponent1081({ config }: HeavyProps1081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1081.displayName = 'HeavyComponent1081';
export default HeavyComponent1081;
