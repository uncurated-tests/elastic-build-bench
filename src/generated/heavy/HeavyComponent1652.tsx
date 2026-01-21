'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1652<T> = T extends (infer U)[]
  ? DeepReadonlyArray1652<U>
  : T extends object
  ? DeepReadonlyObject1652<T>
  : T;

interface DeepReadonlyArray1652<T> extends ReadonlyArray<DeepReadonly1652<T>> {}

type DeepReadonlyObject1652<T> = {
  readonly [P in keyof T]: DeepReadonly1652<T[P]>;
};

type UnionToIntersection1652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1652<T> = UnionToIntersection1652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1652<T extends unknown[], V> = [...T, V];

type TuplifyUnion1652<T, L = LastOf1652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1652<TuplifyUnion1652<Exclude<T, L>>, L>;

type DeepPartial1652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1652<T[P]> }
  : T;

type Paths1652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1652<K, Paths1652<T[K], Prev1652[D]>> : never }[keyof T]
  : never;

type Prev1652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1652 {
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

type ConfigPaths1652 = Paths1652<NestedConfig1652>;

interface HeavyProps1652 {
  config: DeepPartial1652<NestedConfig1652>;
  path?: ConfigPaths1652;
}

const HeavyComponent1652 = memo(function HeavyComponent1652({ config }: HeavyProps1652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1652.displayName = 'HeavyComponent1652';
export default HeavyComponent1652;
