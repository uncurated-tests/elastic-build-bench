'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1796<T> = T extends (infer U)[]
  ? DeepReadonlyArray1796<U>
  : T extends object
  ? DeepReadonlyObject1796<T>
  : T;

interface DeepReadonlyArray1796<T> extends ReadonlyArray<DeepReadonly1796<T>> {}

type DeepReadonlyObject1796<T> = {
  readonly [P in keyof T]: DeepReadonly1796<T[P]>;
};

type UnionToIntersection1796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1796<T> = UnionToIntersection1796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1796<T extends unknown[], V> = [...T, V];

type TuplifyUnion1796<T, L = LastOf1796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1796<TuplifyUnion1796<Exclude<T, L>>, L>;

type DeepPartial1796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1796<T[P]> }
  : T;

type Paths1796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1796<K, Paths1796<T[K], Prev1796[D]>> : never }[keyof T]
  : never;

type Prev1796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1796 {
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

type ConfigPaths1796 = Paths1796<NestedConfig1796>;

interface HeavyProps1796 {
  config: DeepPartial1796<NestedConfig1796>;
  path?: ConfigPaths1796;
}

const HeavyComponent1796 = memo(function HeavyComponent1796({ config }: HeavyProps1796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1796.displayName = 'HeavyComponent1796';
export default HeavyComponent1796;
