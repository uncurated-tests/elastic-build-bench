'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1235<T> = T extends (infer U)[]
  ? DeepReadonlyArray1235<U>
  : T extends object
  ? DeepReadonlyObject1235<T>
  : T;

interface DeepReadonlyArray1235<T> extends ReadonlyArray<DeepReadonly1235<T>> {}

type DeepReadonlyObject1235<T> = {
  readonly [P in keyof T]: DeepReadonly1235<T[P]>;
};

type UnionToIntersection1235<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1235<T> = UnionToIntersection1235<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1235<T extends unknown[], V> = [...T, V];

type TuplifyUnion1235<T, L = LastOf1235<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1235<TuplifyUnion1235<Exclude<T, L>>, L>;

type DeepPartial1235<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1235<T[P]> }
  : T;

type Paths1235<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1235<K, Paths1235<T[K], Prev1235[D]>> : never }[keyof T]
  : never;

type Prev1235 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1235<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1235 {
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

type ConfigPaths1235 = Paths1235<NestedConfig1235>;

interface HeavyProps1235 {
  config: DeepPartial1235<NestedConfig1235>;
  path?: ConfigPaths1235;
}

const HeavyComponent1235 = memo(function HeavyComponent1235({ config }: HeavyProps1235) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1235) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1235 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1235: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1235.displayName = 'HeavyComponent1235';
export default HeavyComponent1235;
