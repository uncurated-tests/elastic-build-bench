'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1474<T> = T extends (infer U)[]
  ? DeepReadonlyArray1474<U>
  : T extends object
  ? DeepReadonlyObject1474<T>
  : T;

interface DeepReadonlyArray1474<T> extends ReadonlyArray<DeepReadonly1474<T>> {}

type DeepReadonlyObject1474<T> = {
  readonly [P in keyof T]: DeepReadonly1474<T[P]>;
};

type UnionToIntersection1474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1474<T> = UnionToIntersection1474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1474<T extends unknown[], V> = [...T, V];

type TuplifyUnion1474<T, L = LastOf1474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1474<TuplifyUnion1474<Exclude<T, L>>, L>;

type DeepPartial1474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1474<T[P]> }
  : T;

type Paths1474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1474<K, Paths1474<T[K], Prev1474[D]>> : never }[keyof T]
  : never;

type Prev1474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1474 {
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

type ConfigPaths1474 = Paths1474<NestedConfig1474>;

interface HeavyProps1474 {
  config: DeepPartial1474<NestedConfig1474>;
  path?: ConfigPaths1474;
}

const HeavyComponent1474 = memo(function HeavyComponent1474({ config }: HeavyProps1474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1474.displayName = 'HeavyComponent1474';
export default HeavyComponent1474;
