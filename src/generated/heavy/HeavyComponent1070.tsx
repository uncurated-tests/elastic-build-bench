'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1070<T> = T extends (infer U)[]
  ? DeepReadonlyArray1070<U>
  : T extends object
  ? DeepReadonlyObject1070<T>
  : T;

interface DeepReadonlyArray1070<T> extends ReadonlyArray<DeepReadonly1070<T>> {}

type DeepReadonlyObject1070<T> = {
  readonly [P in keyof T]: DeepReadonly1070<T[P]>;
};

type UnionToIntersection1070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1070<T> = UnionToIntersection1070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1070<T extends unknown[], V> = [...T, V];

type TuplifyUnion1070<T, L = LastOf1070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1070<TuplifyUnion1070<Exclude<T, L>>, L>;

type DeepPartial1070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1070<T[P]> }
  : T;

type Paths1070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1070<K, Paths1070<T[K], Prev1070[D]>> : never }[keyof T]
  : never;

type Prev1070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1070 {
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

type ConfigPaths1070 = Paths1070<NestedConfig1070>;

interface HeavyProps1070 {
  config: DeepPartial1070<NestedConfig1070>;
  path?: ConfigPaths1070;
}

const HeavyComponent1070 = memo(function HeavyComponent1070({ config }: HeavyProps1070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1070.displayName = 'HeavyComponent1070';
export default HeavyComponent1070;
