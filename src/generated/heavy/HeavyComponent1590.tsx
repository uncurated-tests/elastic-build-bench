'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1590<T> = T extends (infer U)[]
  ? DeepReadonlyArray1590<U>
  : T extends object
  ? DeepReadonlyObject1590<T>
  : T;

interface DeepReadonlyArray1590<T> extends ReadonlyArray<DeepReadonly1590<T>> {}

type DeepReadonlyObject1590<T> = {
  readonly [P in keyof T]: DeepReadonly1590<T[P]>;
};

type UnionToIntersection1590<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1590<T> = UnionToIntersection1590<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1590<T extends unknown[], V> = [...T, V];

type TuplifyUnion1590<T, L = LastOf1590<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1590<TuplifyUnion1590<Exclude<T, L>>, L>;

type DeepPartial1590<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1590<T[P]> }
  : T;

type Paths1590<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1590<K, Paths1590<T[K], Prev1590[D]>> : never }[keyof T]
  : never;

type Prev1590 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1590<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1590 {
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

type ConfigPaths1590 = Paths1590<NestedConfig1590>;

interface HeavyProps1590 {
  config: DeepPartial1590<NestedConfig1590>;
  path?: ConfigPaths1590;
}

const HeavyComponent1590 = memo(function HeavyComponent1590({ config }: HeavyProps1590) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1590) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1590 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1590: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1590.displayName = 'HeavyComponent1590';
export default HeavyComponent1590;
