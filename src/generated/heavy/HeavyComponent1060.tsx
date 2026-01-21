'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1060<T> = T extends (infer U)[]
  ? DeepReadonlyArray1060<U>
  : T extends object
  ? DeepReadonlyObject1060<T>
  : T;

interface DeepReadonlyArray1060<T> extends ReadonlyArray<DeepReadonly1060<T>> {}

type DeepReadonlyObject1060<T> = {
  readonly [P in keyof T]: DeepReadonly1060<T[P]>;
};

type UnionToIntersection1060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1060<T> = UnionToIntersection1060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1060<T extends unknown[], V> = [...T, V];

type TuplifyUnion1060<T, L = LastOf1060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1060<TuplifyUnion1060<Exclude<T, L>>, L>;

type DeepPartial1060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1060<T[P]> }
  : T;

type Paths1060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1060<K, Paths1060<T[K], Prev1060[D]>> : never }[keyof T]
  : never;

type Prev1060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1060 {
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

type ConfigPaths1060 = Paths1060<NestedConfig1060>;

interface HeavyProps1060 {
  config: DeepPartial1060<NestedConfig1060>;
  path?: ConfigPaths1060;
}

const HeavyComponent1060 = memo(function HeavyComponent1060({ config }: HeavyProps1060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1060.displayName = 'HeavyComponent1060';
export default HeavyComponent1060;
