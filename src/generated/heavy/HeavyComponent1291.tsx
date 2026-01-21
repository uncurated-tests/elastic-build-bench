'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1291<T> = T extends (infer U)[]
  ? DeepReadonlyArray1291<U>
  : T extends object
  ? DeepReadonlyObject1291<T>
  : T;

interface DeepReadonlyArray1291<T> extends ReadonlyArray<DeepReadonly1291<T>> {}

type DeepReadonlyObject1291<T> = {
  readonly [P in keyof T]: DeepReadonly1291<T[P]>;
};

type UnionToIntersection1291<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1291<T> = UnionToIntersection1291<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1291<T extends unknown[], V> = [...T, V];

type TuplifyUnion1291<T, L = LastOf1291<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1291<TuplifyUnion1291<Exclude<T, L>>, L>;

type DeepPartial1291<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1291<T[P]> }
  : T;

type Paths1291<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1291<K, Paths1291<T[K], Prev1291[D]>> : never }[keyof T]
  : never;

type Prev1291 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1291<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1291 {
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

type ConfigPaths1291 = Paths1291<NestedConfig1291>;

interface HeavyProps1291 {
  config: DeepPartial1291<NestedConfig1291>;
  path?: ConfigPaths1291;
}

const HeavyComponent1291 = memo(function HeavyComponent1291({ config }: HeavyProps1291) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1291) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1291 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1291: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1291.displayName = 'HeavyComponent1291';
export default HeavyComponent1291;
