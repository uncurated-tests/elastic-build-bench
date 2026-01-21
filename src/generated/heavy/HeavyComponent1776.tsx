'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1776<T> = T extends (infer U)[]
  ? DeepReadonlyArray1776<U>
  : T extends object
  ? DeepReadonlyObject1776<T>
  : T;

interface DeepReadonlyArray1776<T> extends ReadonlyArray<DeepReadonly1776<T>> {}

type DeepReadonlyObject1776<T> = {
  readonly [P in keyof T]: DeepReadonly1776<T[P]>;
};

type UnionToIntersection1776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1776<T> = UnionToIntersection1776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1776<T extends unknown[], V> = [...T, V];

type TuplifyUnion1776<T, L = LastOf1776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1776<TuplifyUnion1776<Exclude<T, L>>, L>;

type DeepPartial1776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1776<T[P]> }
  : T;

type Paths1776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1776<K, Paths1776<T[K], Prev1776[D]>> : never }[keyof T]
  : never;

type Prev1776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1776 {
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

type ConfigPaths1776 = Paths1776<NestedConfig1776>;

interface HeavyProps1776 {
  config: DeepPartial1776<NestedConfig1776>;
  path?: ConfigPaths1776;
}

const HeavyComponent1776 = memo(function HeavyComponent1776({ config }: HeavyProps1776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1776.displayName = 'HeavyComponent1776';
export default HeavyComponent1776;
