'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1159<T> = T extends (infer U)[]
  ? DeepReadonlyArray1159<U>
  : T extends object
  ? DeepReadonlyObject1159<T>
  : T;

interface DeepReadonlyArray1159<T> extends ReadonlyArray<DeepReadonly1159<T>> {}

type DeepReadonlyObject1159<T> = {
  readonly [P in keyof T]: DeepReadonly1159<T[P]>;
};

type UnionToIntersection1159<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1159<T> = UnionToIntersection1159<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1159<T extends unknown[], V> = [...T, V];

type TuplifyUnion1159<T, L = LastOf1159<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1159<TuplifyUnion1159<Exclude<T, L>>, L>;

type DeepPartial1159<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1159<T[P]> }
  : T;

type Paths1159<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1159<K, Paths1159<T[K], Prev1159[D]>> : never }[keyof T]
  : never;

type Prev1159 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1159<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1159 {
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

type ConfigPaths1159 = Paths1159<NestedConfig1159>;

interface HeavyProps1159 {
  config: DeepPartial1159<NestedConfig1159>;
  path?: ConfigPaths1159;
}

const HeavyComponent1159 = memo(function HeavyComponent1159({ config }: HeavyProps1159) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1159) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1159 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1159: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1159.displayName = 'HeavyComponent1159';
export default HeavyComponent1159;
