'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1856<T> = T extends (infer U)[]
  ? DeepReadonlyArray1856<U>
  : T extends object
  ? DeepReadonlyObject1856<T>
  : T;

interface DeepReadonlyArray1856<T> extends ReadonlyArray<DeepReadonly1856<T>> {}

type DeepReadonlyObject1856<T> = {
  readonly [P in keyof T]: DeepReadonly1856<T[P]>;
};

type UnionToIntersection1856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1856<T> = UnionToIntersection1856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1856<T extends unknown[], V> = [...T, V];

type TuplifyUnion1856<T, L = LastOf1856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1856<TuplifyUnion1856<Exclude<T, L>>, L>;

type DeepPartial1856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1856<T[P]> }
  : T;

type Paths1856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1856<K, Paths1856<T[K], Prev1856[D]>> : never }[keyof T]
  : never;

type Prev1856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1856 {
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

type ConfigPaths1856 = Paths1856<NestedConfig1856>;

interface HeavyProps1856 {
  config: DeepPartial1856<NestedConfig1856>;
  path?: ConfigPaths1856;
}

const HeavyComponent1856 = memo(function HeavyComponent1856({ config }: HeavyProps1856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1856.displayName = 'HeavyComponent1856';
export default HeavyComponent1856;
