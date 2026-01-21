'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1201<T> = T extends (infer U)[]
  ? DeepReadonlyArray1201<U>
  : T extends object
  ? DeepReadonlyObject1201<T>
  : T;

interface DeepReadonlyArray1201<T> extends ReadonlyArray<DeepReadonly1201<T>> {}

type DeepReadonlyObject1201<T> = {
  readonly [P in keyof T]: DeepReadonly1201<T[P]>;
};

type UnionToIntersection1201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1201<T> = UnionToIntersection1201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1201<T extends unknown[], V> = [...T, V];

type TuplifyUnion1201<T, L = LastOf1201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1201<TuplifyUnion1201<Exclude<T, L>>, L>;

type DeepPartial1201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1201<T[P]> }
  : T;

type Paths1201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1201<K, Paths1201<T[K], Prev1201[D]>> : never }[keyof T]
  : never;

type Prev1201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1201 {
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

type ConfigPaths1201 = Paths1201<NestedConfig1201>;

interface HeavyProps1201 {
  config: DeepPartial1201<NestedConfig1201>;
  path?: ConfigPaths1201;
}

const HeavyComponent1201 = memo(function HeavyComponent1201({ config }: HeavyProps1201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1201.displayName = 'HeavyComponent1201';
export default HeavyComponent1201;
