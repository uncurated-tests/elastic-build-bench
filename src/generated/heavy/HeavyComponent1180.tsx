'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1180<T> = T extends (infer U)[]
  ? DeepReadonlyArray1180<U>
  : T extends object
  ? DeepReadonlyObject1180<T>
  : T;

interface DeepReadonlyArray1180<T> extends ReadonlyArray<DeepReadonly1180<T>> {}

type DeepReadonlyObject1180<T> = {
  readonly [P in keyof T]: DeepReadonly1180<T[P]>;
};

type UnionToIntersection1180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1180<T> = UnionToIntersection1180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1180<T extends unknown[], V> = [...T, V];

type TuplifyUnion1180<T, L = LastOf1180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1180<TuplifyUnion1180<Exclude<T, L>>, L>;

type DeepPartial1180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1180<T[P]> }
  : T;

type Paths1180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1180<K, Paths1180<T[K], Prev1180[D]>> : never }[keyof T]
  : never;

type Prev1180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1180 {
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

type ConfigPaths1180 = Paths1180<NestedConfig1180>;

interface HeavyProps1180 {
  config: DeepPartial1180<NestedConfig1180>;
  path?: ConfigPaths1180;
}

const HeavyComponent1180 = memo(function HeavyComponent1180({ config }: HeavyProps1180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1180.displayName = 'HeavyComponent1180';
export default HeavyComponent1180;
