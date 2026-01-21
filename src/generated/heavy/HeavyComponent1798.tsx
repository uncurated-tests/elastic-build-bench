'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1798<T> = T extends (infer U)[]
  ? DeepReadonlyArray1798<U>
  : T extends object
  ? DeepReadonlyObject1798<T>
  : T;

interface DeepReadonlyArray1798<T> extends ReadonlyArray<DeepReadonly1798<T>> {}

type DeepReadonlyObject1798<T> = {
  readonly [P in keyof T]: DeepReadonly1798<T[P]>;
};

type UnionToIntersection1798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1798<T> = UnionToIntersection1798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1798<T extends unknown[], V> = [...T, V];

type TuplifyUnion1798<T, L = LastOf1798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1798<TuplifyUnion1798<Exclude<T, L>>, L>;

type DeepPartial1798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1798<T[P]> }
  : T;

type Paths1798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1798<K, Paths1798<T[K], Prev1798[D]>> : never }[keyof T]
  : never;

type Prev1798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1798 {
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

type ConfigPaths1798 = Paths1798<NestedConfig1798>;

interface HeavyProps1798 {
  config: DeepPartial1798<NestedConfig1798>;
  path?: ConfigPaths1798;
}

const HeavyComponent1798 = memo(function HeavyComponent1798({ config }: HeavyProps1798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1798.displayName = 'HeavyComponent1798';
export default HeavyComponent1798;
