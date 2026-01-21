'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1581<T> = T extends (infer U)[]
  ? DeepReadonlyArray1581<U>
  : T extends object
  ? DeepReadonlyObject1581<T>
  : T;

interface DeepReadonlyArray1581<T> extends ReadonlyArray<DeepReadonly1581<T>> {}

type DeepReadonlyObject1581<T> = {
  readonly [P in keyof T]: DeepReadonly1581<T[P]>;
};

type UnionToIntersection1581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1581<T> = UnionToIntersection1581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1581<T extends unknown[], V> = [...T, V];

type TuplifyUnion1581<T, L = LastOf1581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1581<TuplifyUnion1581<Exclude<T, L>>, L>;

type DeepPartial1581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1581<T[P]> }
  : T;

type Paths1581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1581<K, Paths1581<T[K], Prev1581[D]>> : never }[keyof T]
  : never;

type Prev1581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1581 {
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

type ConfigPaths1581 = Paths1581<NestedConfig1581>;

interface HeavyProps1581 {
  config: DeepPartial1581<NestedConfig1581>;
  path?: ConfigPaths1581;
}

const HeavyComponent1581 = memo(function HeavyComponent1581({ config }: HeavyProps1581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1581.displayName = 'HeavyComponent1581';
export default HeavyComponent1581;
