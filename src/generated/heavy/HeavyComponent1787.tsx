'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1787<T> = T extends (infer U)[]
  ? DeepReadonlyArray1787<U>
  : T extends object
  ? DeepReadonlyObject1787<T>
  : T;

interface DeepReadonlyArray1787<T> extends ReadonlyArray<DeepReadonly1787<T>> {}

type DeepReadonlyObject1787<T> = {
  readonly [P in keyof T]: DeepReadonly1787<T[P]>;
};

type UnionToIntersection1787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1787<T> = UnionToIntersection1787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1787<T extends unknown[], V> = [...T, V];

type TuplifyUnion1787<T, L = LastOf1787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1787<TuplifyUnion1787<Exclude<T, L>>, L>;

type DeepPartial1787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1787<T[P]> }
  : T;

type Paths1787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1787<K, Paths1787<T[K], Prev1787[D]>> : never }[keyof T]
  : never;

type Prev1787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1787 {
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

type ConfigPaths1787 = Paths1787<NestedConfig1787>;

interface HeavyProps1787 {
  config: DeepPartial1787<NestedConfig1787>;
  path?: ConfigPaths1787;
}

const HeavyComponent1787 = memo(function HeavyComponent1787({ config }: HeavyProps1787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1787.displayName = 'HeavyComponent1787';
export default HeavyComponent1787;
