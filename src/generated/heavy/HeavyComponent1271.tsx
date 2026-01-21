'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1271<T> = T extends (infer U)[]
  ? DeepReadonlyArray1271<U>
  : T extends object
  ? DeepReadonlyObject1271<T>
  : T;

interface DeepReadonlyArray1271<T> extends ReadonlyArray<DeepReadonly1271<T>> {}

type DeepReadonlyObject1271<T> = {
  readonly [P in keyof T]: DeepReadonly1271<T[P]>;
};

type UnionToIntersection1271<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1271<T> = UnionToIntersection1271<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1271<T extends unknown[], V> = [...T, V];

type TuplifyUnion1271<T, L = LastOf1271<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1271<TuplifyUnion1271<Exclude<T, L>>, L>;

type DeepPartial1271<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1271<T[P]> }
  : T;

type Paths1271<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1271<K, Paths1271<T[K], Prev1271[D]>> : never }[keyof T]
  : never;

type Prev1271 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1271<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1271 {
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

type ConfigPaths1271 = Paths1271<NestedConfig1271>;

interface HeavyProps1271 {
  config: DeepPartial1271<NestedConfig1271>;
  path?: ConfigPaths1271;
}

const HeavyComponent1271 = memo(function HeavyComponent1271({ config }: HeavyProps1271) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1271) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1271 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1271: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1271.displayName = 'HeavyComponent1271';
export default HeavyComponent1271;
