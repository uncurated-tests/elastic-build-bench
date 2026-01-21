'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1727<T> = T extends (infer U)[]
  ? DeepReadonlyArray1727<U>
  : T extends object
  ? DeepReadonlyObject1727<T>
  : T;

interface DeepReadonlyArray1727<T> extends ReadonlyArray<DeepReadonly1727<T>> {}

type DeepReadonlyObject1727<T> = {
  readonly [P in keyof T]: DeepReadonly1727<T[P]>;
};

type UnionToIntersection1727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1727<T> = UnionToIntersection1727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1727<T extends unknown[], V> = [...T, V];

type TuplifyUnion1727<T, L = LastOf1727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1727<TuplifyUnion1727<Exclude<T, L>>, L>;

type DeepPartial1727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1727<T[P]> }
  : T;

type Paths1727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1727<K, Paths1727<T[K], Prev1727[D]>> : never }[keyof T]
  : never;

type Prev1727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1727 {
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

type ConfigPaths1727 = Paths1727<NestedConfig1727>;

interface HeavyProps1727 {
  config: DeepPartial1727<NestedConfig1727>;
  path?: ConfigPaths1727;
}

const HeavyComponent1727 = memo(function HeavyComponent1727({ config }: HeavyProps1727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1727.displayName = 'HeavyComponent1727';
export default HeavyComponent1727;
