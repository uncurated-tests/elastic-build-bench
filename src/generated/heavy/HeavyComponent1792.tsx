'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1792<T> = T extends (infer U)[]
  ? DeepReadonlyArray1792<U>
  : T extends object
  ? DeepReadonlyObject1792<T>
  : T;

interface DeepReadonlyArray1792<T> extends ReadonlyArray<DeepReadonly1792<T>> {}

type DeepReadonlyObject1792<T> = {
  readonly [P in keyof T]: DeepReadonly1792<T[P]>;
};

type UnionToIntersection1792<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1792<T> = UnionToIntersection1792<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1792<T extends unknown[], V> = [...T, V];

type TuplifyUnion1792<T, L = LastOf1792<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1792<TuplifyUnion1792<Exclude<T, L>>, L>;

type DeepPartial1792<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1792<T[P]> }
  : T;

type Paths1792<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1792<K, Paths1792<T[K], Prev1792[D]>> : never }[keyof T]
  : never;

type Prev1792 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1792<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1792 {
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

type ConfigPaths1792 = Paths1792<NestedConfig1792>;

interface HeavyProps1792 {
  config: DeepPartial1792<NestedConfig1792>;
  path?: ConfigPaths1792;
}

const HeavyComponent1792 = memo(function HeavyComponent1792({ config }: HeavyProps1792) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1792) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1792 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1792: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1792.displayName = 'HeavyComponent1792';
export default HeavyComponent1792;
