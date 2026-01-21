'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1760<T> = T extends (infer U)[]
  ? DeepReadonlyArray1760<U>
  : T extends object
  ? DeepReadonlyObject1760<T>
  : T;

interface DeepReadonlyArray1760<T> extends ReadonlyArray<DeepReadonly1760<T>> {}

type DeepReadonlyObject1760<T> = {
  readonly [P in keyof T]: DeepReadonly1760<T[P]>;
};

type UnionToIntersection1760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1760<T> = UnionToIntersection1760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1760<T extends unknown[], V> = [...T, V];

type TuplifyUnion1760<T, L = LastOf1760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1760<TuplifyUnion1760<Exclude<T, L>>, L>;

type DeepPartial1760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1760<T[P]> }
  : T;

type Paths1760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1760<K, Paths1760<T[K], Prev1760[D]>> : never }[keyof T]
  : never;

type Prev1760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1760 {
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

type ConfigPaths1760 = Paths1760<NestedConfig1760>;

interface HeavyProps1760 {
  config: DeepPartial1760<NestedConfig1760>;
  path?: ConfigPaths1760;
}

const HeavyComponent1760 = memo(function HeavyComponent1760({ config }: HeavyProps1760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1760.displayName = 'HeavyComponent1760';
export default HeavyComponent1760;
