'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1430<T> = T extends (infer U)[]
  ? DeepReadonlyArray1430<U>
  : T extends object
  ? DeepReadonlyObject1430<T>
  : T;

interface DeepReadonlyArray1430<T> extends ReadonlyArray<DeepReadonly1430<T>> {}

type DeepReadonlyObject1430<T> = {
  readonly [P in keyof T]: DeepReadonly1430<T[P]>;
};

type UnionToIntersection1430<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1430<T> = UnionToIntersection1430<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1430<T extends unknown[], V> = [...T, V];

type TuplifyUnion1430<T, L = LastOf1430<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1430<TuplifyUnion1430<Exclude<T, L>>, L>;

type DeepPartial1430<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1430<T[P]> }
  : T;

type Paths1430<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1430<K, Paths1430<T[K], Prev1430[D]>> : never }[keyof T]
  : never;

type Prev1430 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1430<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1430 {
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

type ConfigPaths1430 = Paths1430<NestedConfig1430>;

interface HeavyProps1430 {
  config: DeepPartial1430<NestedConfig1430>;
  path?: ConfigPaths1430;
}

const HeavyComponent1430 = memo(function HeavyComponent1430({ config }: HeavyProps1430) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1430) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1430 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1430: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1430.displayName = 'HeavyComponent1430';
export default HeavyComponent1430;
