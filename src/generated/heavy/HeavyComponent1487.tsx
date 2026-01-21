'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1487<T> = T extends (infer U)[]
  ? DeepReadonlyArray1487<U>
  : T extends object
  ? DeepReadonlyObject1487<T>
  : T;

interface DeepReadonlyArray1487<T> extends ReadonlyArray<DeepReadonly1487<T>> {}

type DeepReadonlyObject1487<T> = {
  readonly [P in keyof T]: DeepReadonly1487<T[P]>;
};

type UnionToIntersection1487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1487<T> = UnionToIntersection1487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1487<T extends unknown[], V> = [...T, V];

type TuplifyUnion1487<T, L = LastOf1487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1487<TuplifyUnion1487<Exclude<T, L>>, L>;

type DeepPartial1487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1487<T[P]> }
  : T;

type Paths1487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1487<K, Paths1487<T[K], Prev1487[D]>> : never }[keyof T]
  : never;

type Prev1487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1487 {
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

type ConfigPaths1487 = Paths1487<NestedConfig1487>;

interface HeavyProps1487 {
  config: DeepPartial1487<NestedConfig1487>;
  path?: ConfigPaths1487;
}

const HeavyComponent1487 = memo(function HeavyComponent1487({ config }: HeavyProps1487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1487.displayName = 'HeavyComponent1487';
export default HeavyComponent1487;
