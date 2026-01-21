'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1770<T> = T extends (infer U)[]
  ? DeepReadonlyArray1770<U>
  : T extends object
  ? DeepReadonlyObject1770<T>
  : T;

interface DeepReadonlyArray1770<T> extends ReadonlyArray<DeepReadonly1770<T>> {}

type DeepReadonlyObject1770<T> = {
  readonly [P in keyof T]: DeepReadonly1770<T[P]>;
};

type UnionToIntersection1770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1770<T> = UnionToIntersection1770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1770<T extends unknown[], V> = [...T, V];

type TuplifyUnion1770<T, L = LastOf1770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1770<TuplifyUnion1770<Exclude<T, L>>, L>;

type DeepPartial1770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1770<T[P]> }
  : T;

type Paths1770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1770<K, Paths1770<T[K], Prev1770[D]>> : never }[keyof T]
  : never;

type Prev1770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1770 {
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

type ConfigPaths1770 = Paths1770<NestedConfig1770>;

interface HeavyProps1770 {
  config: DeepPartial1770<NestedConfig1770>;
  path?: ConfigPaths1770;
}

const HeavyComponent1770 = memo(function HeavyComponent1770({ config }: HeavyProps1770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1770.displayName = 'HeavyComponent1770';
export default HeavyComponent1770;
