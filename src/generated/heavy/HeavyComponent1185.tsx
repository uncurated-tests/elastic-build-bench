'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1185<T> = T extends (infer U)[]
  ? DeepReadonlyArray1185<U>
  : T extends object
  ? DeepReadonlyObject1185<T>
  : T;

interface DeepReadonlyArray1185<T> extends ReadonlyArray<DeepReadonly1185<T>> {}

type DeepReadonlyObject1185<T> = {
  readonly [P in keyof T]: DeepReadonly1185<T[P]>;
};

type UnionToIntersection1185<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1185<T> = UnionToIntersection1185<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1185<T extends unknown[], V> = [...T, V];

type TuplifyUnion1185<T, L = LastOf1185<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1185<TuplifyUnion1185<Exclude<T, L>>, L>;

type DeepPartial1185<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1185<T[P]> }
  : T;

type Paths1185<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1185<K, Paths1185<T[K], Prev1185[D]>> : never }[keyof T]
  : never;

type Prev1185 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1185<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1185 {
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

type ConfigPaths1185 = Paths1185<NestedConfig1185>;

interface HeavyProps1185 {
  config: DeepPartial1185<NestedConfig1185>;
  path?: ConfigPaths1185;
}

const HeavyComponent1185 = memo(function HeavyComponent1185({ config }: HeavyProps1185) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1185) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1185 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1185: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1185.displayName = 'HeavyComponent1185';
export default HeavyComponent1185;
