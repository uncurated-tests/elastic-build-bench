'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1280<T> = T extends (infer U)[]
  ? DeepReadonlyArray1280<U>
  : T extends object
  ? DeepReadonlyObject1280<T>
  : T;

interface DeepReadonlyArray1280<T> extends ReadonlyArray<DeepReadonly1280<T>> {}

type DeepReadonlyObject1280<T> = {
  readonly [P in keyof T]: DeepReadonly1280<T[P]>;
};

type UnionToIntersection1280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1280<T> = UnionToIntersection1280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1280<T extends unknown[], V> = [...T, V];

type TuplifyUnion1280<T, L = LastOf1280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1280<TuplifyUnion1280<Exclude<T, L>>, L>;

type DeepPartial1280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1280<T[P]> }
  : T;

type Paths1280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1280<K, Paths1280<T[K], Prev1280[D]>> : never }[keyof T]
  : never;

type Prev1280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1280 {
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

type ConfigPaths1280 = Paths1280<NestedConfig1280>;

interface HeavyProps1280 {
  config: DeepPartial1280<NestedConfig1280>;
  path?: ConfigPaths1280;
}

const HeavyComponent1280 = memo(function HeavyComponent1280({ config }: HeavyProps1280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1280.displayName = 'HeavyComponent1280';
export default HeavyComponent1280;
