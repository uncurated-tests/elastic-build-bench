'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1980<T> = T extends (infer U)[]
  ? DeepReadonlyArray1980<U>
  : T extends object
  ? DeepReadonlyObject1980<T>
  : T;

interface DeepReadonlyArray1980<T> extends ReadonlyArray<DeepReadonly1980<T>> {}

type DeepReadonlyObject1980<T> = {
  readonly [P in keyof T]: DeepReadonly1980<T[P]>;
};

type UnionToIntersection1980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1980<T> = UnionToIntersection1980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1980<T extends unknown[], V> = [...T, V];

type TuplifyUnion1980<T, L = LastOf1980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1980<TuplifyUnion1980<Exclude<T, L>>, L>;

type DeepPartial1980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1980<T[P]> }
  : T;

type Paths1980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1980<K, Paths1980<T[K], Prev1980[D]>> : never }[keyof T]
  : never;

type Prev1980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1980 {
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

type ConfigPaths1980 = Paths1980<NestedConfig1980>;

interface HeavyProps1980 {
  config: DeepPartial1980<NestedConfig1980>;
  path?: ConfigPaths1980;
}

const HeavyComponent1980 = memo(function HeavyComponent1980({ config }: HeavyProps1980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1980.displayName = 'HeavyComponent1980';
export default HeavyComponent1980;
