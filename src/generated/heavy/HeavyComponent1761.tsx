'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1761<T> = T extends (infer U)[]
  ? DeepReadonlyArray1761<U>
  : T extends object
  ? DeepReadonlyObject1761<T>
  : T;

interface DeepReadonlyArray1761<T> extends ReadonlyArray<DeepReadonly1761<T>> {}

type DeepReadonlyObject1761<T> = {
  readonly [P in keyof T]: DeepReadonly1761<T[P]>;
};

type UnionToIntersection1761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1761<T> = UnionToIntersection1761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1761<T extends unknown[], V> = [...T, V];

type TuplifyUnion1761<T, L = LastOf1761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1761<TuplifyUnion1761<Exclude<T, L>>, L>;

type DeepPartial1761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1761<T[P]> }
  : T;

type Paths1761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1761<K, Paths1761<T[K], Prev1761[D]>> : never }[keyof T]
  : never;

type Prev1761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1761 {
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

type ConfigPaths1761 = Paths1761<NestedConfig1761>;

interface HeavyProps1761 {
  config: DeepPartial1761<NestedConfig1761>;
  path?: ConfigPaths1761;
}

const HeavyComponent1761 = memo(function HeavyComponent1761({ config }: HeavyProps1761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1761.displayName = 'HeavyComponent1761';
export default HeavyComponent1761;
