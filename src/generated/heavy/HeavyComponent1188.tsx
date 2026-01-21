'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1188<T> = T extends (infer U)[]
  ? DeepReadonlyArray1188<U>
  : T extends object
  ? DeepReadonlyObject1188<T>
  : T;

interface DeepReadonlyArray1188<T> extends ReadonlyArray<DeepReadonly1188<T>> {}

type DeepReadonlyObject1188<T> = {
  readonly [P in keyof T]: DeepReadonly1188<T[P]>;
};

type UnionToIntersection1188<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1188<T> = UnionToIntersection1188<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1188<T extends unknown[], V> = [...T, V];

type TuplifyUnion1188<T, L = LastOf1188<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1188<TuplifyUnion1188<Exclude<T, L>>, L>;

type DeepPartial1188<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1188<T[P]> }
  : T;

type Paths1188<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1188<K, Paths1188<T[K], Prev1188[D]>> : never }[keyof T]
  : never;

type Prev1188 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1188<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1188 {
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

type ConfigPaths1188 = Paths1188<NestedConfig1188>;

interface HeavyProps1188 {
  config: DeepPartial1188<NestedConfig1188>;
  path?: ConfigPaths1188;
}

const HeavyComponent1188 = memo(function HeavyComponent1188({ config }: HeavyProps1188) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1188) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1188 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1188: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1188.displayName = 'HeavyComponent1188';
export default HeavyComponent1188;
