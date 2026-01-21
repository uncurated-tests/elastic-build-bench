'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1448<T> = T extends (infer U)[]
  ? DeepReadonlyArray1448<U>
  : T extends object
  ? DeepReadonlyObject1448<T>
  : T;

interface DeepReadonlyArray1448<T> extends ReadonlyArray<DeepReadonly1448<T>> {}

type DeepReadonlyObject1448<T> = {
  readonly [P in keyof T]: DeepReadonly1448<T[P]>;
};

type UnionToIntersection1448<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1448<T> = UnionToIntersection1448<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1448<T extends unknown[], V> = [...T, V];

type TuplifyUnion1448<T, L = LastOf1448<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1448<TuplifyUnion1448<Exclude<T, L>>, L>;

type DeepPartial1448<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1448<T[P]> }
  : T;

type Paths1448<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1448<K, Paths1448<T[K], Prev1448[D]>> : never }[keyof T]
  : never;

type Prev1448 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1448<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1448 {
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

type ConfigPaths1448 = Paths1448<NestedConfig1448>;

interface HeavyProps1448 {
  config: DeepPartial1448<NestedConfig1448>;
  path?: ConfigPaths1448;
}

const HeavyComponent1448 = memo(function HeavyComponent1448({ config }: HeavyProps1448) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1448) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1448 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1448: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1448.displayName = 'HeavyComponent1448';
export default HeavyComponent1448;
