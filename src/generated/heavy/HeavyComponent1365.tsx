'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1365<T> = T extends (infer U)[]
  ? DeepReadonlyArray1365<U>
  : T extends object
  ? DeepReadonlyObject1365<T>
  : T;

interface DeepReadonlyArray1365<T> extends ReadonlyArray<DeepReadonly1365<T>> {}

type DeepReadonlyObject1365<T> = {
  readonly [P in keyof T]: DeepReadonly1365<T[P]>;
};

type UnionToIntersection1365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1365<T> = UnionToIntersection1365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1365<T extends unknown[], V> = [...T, V];

type TuplifyUnion1365<T, L = LastOf1365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1365<TuplifyUnion1365<Exclude<T, L>>, L>;

type DeepPartial1365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1365<T[P]> }
  : T;

type Paths1365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1365<K, Paths1365<T[K], Prev1365[D]>> : never }[keyof T]
  : never;

type Prev1365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1365 {
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

type ConfigPaths1365 = Paths1365<NestedConfig1365>;

interface HeavyProps1365 {
  config: DeepPartial1365<NestedConfig1365>;
  path?: ConfigPaths1365;
}

const HeavyComponent1365 = memo(function HeavyComponent1365({ config }: HeavyProps1365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1365.displayName = 'HeavyComponent1365';
export default HeavyComponent1365;
