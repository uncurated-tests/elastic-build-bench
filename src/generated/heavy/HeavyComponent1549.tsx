'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1549<T> = T extends (infer U)[]
  ? DeepReadonlyArray1549<U>
  : T extends object
  ? DeepReadonlyObject1549<T>
  : T;

interface DeepReadonlyArray1549<T> extends ReadonlyArray<DeepReadonly1549<T>> {}

type DeepReadonlyObject1549<T> = {
  readonly [P in keyof T]: DeepReadonly1549<T[P]>;
};

type UnionToIntersection1549<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1549<T> = UnionToIntersection1549<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1549<T extends unknown[], V> = [...T, V];

type TuplifyUnion1549<T, L = LastOf1549<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1549<TuplifyUnion1549<Exclude<T, L>>, L>;

type DeepPartial1549<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1549<T[P]> }
  : T;

type Paths1549<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1549<K, Paths1549<T[K], Prev1549[D]>> : never }[keyof T]
  : never;

type Prev1549 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1549<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1549 {
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

type ConfigPaths1549 = Paths1549<NestedConfig1549>;

interface HeavyProps1549 {
  config: DeepPartial1549<NestedConfig1549>;
  path?: ConfigPaths1549;
}

const HeavyComponent1549 = memo(function HeavyComponent1549({ config }: HeavyProps1549) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1549) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1549 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1549: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1549.displayName = 'HeavyComponent1549';
export default HeavyComponent1549;
