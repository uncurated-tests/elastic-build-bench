'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1413<T> = T extends (infer U)[]
  ? DeepReadonlyArray1413<U>
  : T extends object
  ? DeepReadonlyObject1413<T>
  : T;

interface DeepReadonlyArray1413<T> extends ReadonlyArray<DeepReadonly1413<T>> {}

type DeepReadonlyObject1413<T> = {
  readonly [P in keyof T]: DeepReadonly1413<T[P]>;
};

type UnionToIntersection1413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1413<T> = UnionToIntersection1413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1413<T extends unknown[], V> = [...T, V];

type TuplifyUnion1413<T, L = LastOf1413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1413<TuplifyUnion1413<Exclude<T, L>>, L>;

type DeepPartial1413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1413<T[P]> }
  : T;

type Paths1413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1413<K, Paths1413<T[K], Prev1413[D]>> : never }[keyof T]
  : never;

type Prev1413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1413 {
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

type ConfigPaths1413 = Paths1413<NestedConfig1413>;

interface HeavyProps1413 {
  config: DeepPartial1413<NestedConfig1413>;
  path?: ConfigPaths1413;
}

const HeavyComponent1413 = memo(function HeavyComponent1413({ config }: HeavyProps1413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1413.displayName = 'HeavyComponent1413';
export default HeavyComponent1413;
