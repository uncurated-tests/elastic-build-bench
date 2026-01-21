'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1109<T> = T extends (infer U)[]
  ? DeepReadonlyArray1109<U>
  : T extends object
  ? DeepReadonlyObject1109<T>
  : T;

interface DeepReadonlyArray1109<T> extends ReadonlyArray<DeepReadonly1109<T>> {}

type DeepReadonlyObject1109<T> = {
  readonly [P in keyof T]: DeepReadonly1109<T[P]>;
};

type UnionToIntersection1109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1109<T> = UnionToIntersection1109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1109<T extends unknown[], V> = [...T, V];

type TuplifyUnion1109<T, L = LastOf1109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1109<TuplifyUnion1109<Exclude<T, L>>, L>;

type DeepPartial1109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1109<T[P]> }
  : T;

type Paths1109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1109<K, Paths1109<T[K], Prev1109[D]>> : never }[keyof T]
  : never;

type Prev1109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1109 {
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

type ConfigPaths1109 = Paths1109<NestedConfig1109>;

interface HeavyProps1109 {
  config: DeepPartial1109<NestedConfig1109>;
  path?: ConfigPaths1109;
}

const HeavyComponent1109 = memo(function HeavyComponent1109({ config }: HeavyProps1109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1109.displayName = 'HeavyComponent1109';
export default HeavyComponent1109;
