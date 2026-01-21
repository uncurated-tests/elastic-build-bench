'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1127<T> = T extends (infer U)[]
  ? DeepReadonlyArray1127<U>
  : T extends object
  ? DeepReadonlyObject1127<T>
  : T;

interface DeepReadonlyArray1127<T> extends ReadonlyArray<DeepReadonly1127<T>> {}

type DeepReadonlyObject1127<T> = {
  readonly [P in keyof T]: DeepReadonly1127<T[P]>;
};

type UnionToIntersection1127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1127<T> = UnionToIntersection1127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1127<T extends unknown[], V> = [...T, V];

type TuplifyUnion1127<T, L = LastOf1127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1127<TuplifyUnion1127<Exclude<T, L>>, L>;

type DeepPartial1127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1127<T[P]> }
  : T;

type Paths1127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1127<K, Paths1127<T[K], Prev1127[D]>> : never }[keyof T]
  : never;

type Prev1127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1127 {
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

type ConfigPaths1127 = Paths1127<NestedConfig1127>;

interface HeavyProps1127 {
  config: DeepPartial1127<NestedConfig1127>;
  path?: ConfigPaths1127;
}

const HeavyComponent1127 = memo(function HeavyComponent1127({ config }: HeavyProps1127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1127.displayName = 'HeavyComponent1127';
export default HeavyComponent1127;
