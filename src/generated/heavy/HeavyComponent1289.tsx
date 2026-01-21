'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1289<T> = T extends (infer U)[]
  ? DeepReadonlyArray1289<U>
  : T extends object
  ? DeepReadonlyObject1289<T>
  : T;

interface DeepReadonlyArray1289<T> extends ReadonlyArray<DeepReadonly1289<T>> {}

type DeepReadonlyObject1289<T> = {
  readonly [P in keyof T]: DeepReadonly1289<T[P]>;
};

type UnionToIntersection1289<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1289<T> = UnionToIntersection1289<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1289<T extends unknown[], V> = [...T, V];

type TuplifyUnion1289<T, L = LastOf1289<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1289<TuplifyUnion1289<Exclude<T, L>>, L>;

type DeepPartial1289<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1289<T[P]> }
  : T;

type Paths1289<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1289<K, Paths1289<T[K], Prev1289[D]>> : never }[keyof T]
  : never;

type Prev1289 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1289<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1289 {
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

type ConfigPaths1289 = Paths1289<NestedConfig1289>;

interface HeavyProps1289 {
  config: DeepPartial1289<NestedConfig1289>;
  path?: ConfigPaths1289;
}

const HeavyComponent1289 = memo(function HeavyComponent1289({ config }: HeavyProps1289) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1289) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1289 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1289: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1289.displayName = 'HeavyComponent1289';
export default HeavyComponent1289;
