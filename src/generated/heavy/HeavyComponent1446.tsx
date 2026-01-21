'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1446<T> = T extends (infer U)[]
  ? DeepReadonlyArray1446<U>
  : T extends object
  ? DeepReadonlyObject1446<T>
  : T;

interface DeepReadonlyArray1446<T> extends ReadonlyArray<DeepReadonly1446<T>> {}

type DeepReadonlyObject1446<T> = {
  readonly [P in keyof T]: DeepReadonly1446<T[P]>;
};

type UnionToIntersection1446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1446<T> = UnionToIntersection1446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1446<T extends unknown[], V> = [...T, V];

type TuplifyUnion1446<T, L = LastOf1446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1446<TuplifyUnion1446<Exclude<T, L>>, L>;

type DeepPartial1446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1446<T[P]> }
  : T;

type Paths1446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1446<K, Paths1446<T[K], Prev1446[D]>> : never }[keyof T]
  : never;

type Prev1446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1446 {
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

type ConfigPaths1446 = Paths1446<NestedConfig1446>;

interface HeavyProps1446 {
  config: DeepPartial1446<NestedConfig1446>;
  path?: ConfigPaths1446;
}

const HeavyComponent1446 = memo(function HeavyComponent1446({ config }: HeavyProps1446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1446.displayName = 'HeavyComponent1446';
export default HeavyComponent1446;
