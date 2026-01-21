'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1778<T> = T extends (infer U)[]
  ? DeepReadonlyArray1778<U>
  : T extends object
  ? DeepReadonlyObject1778<T>
  : T;

interface DeepReadonlyArray1778<T> extends ReadonlyArray<DeepReadonly1778<T>> {}

type DeepReadonlyObject1778<T> = {
  readonly [P in keyof T]: DeepReadonly1778<T[P]>;
};

type UnionToIntersection1778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1778<T> = UnionToIntersection1778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1778<T extends unknown[], V> = [...T, V];

type TuplifyUnion1778<T, L = LastOf1778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1778<TuplifyUnion1778<Exclude<T, L>>, L>;

type DeepPartial1778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1778<T[P]> }
  : T;

type Paths1778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1778<K, Paths1778<T[K], Prev1778[D]>> : never }[keyof T]
  : never;

type Prev1778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1778 {
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

type ConfigPaths1778 = Paths1778<NestedConfig1778>;

interface HeavyProps1778 {
  config: DeepPartial1778<NestedConfig1778>;
  path?: ConfigPaths1778;
}

const HeavyComponent1778 = memo(function HeavyComponent1778({ config }: HeavyProps1778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1778.displayName = 'HeavyComponent1778';
export default HeavyComponent1778;
