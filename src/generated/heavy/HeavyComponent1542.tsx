'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1542<T> = T extends (infer U)[]
  ? DeepReadonlyArray1542<U>
  : T extends object
  ? DeepReadonlyObject1542<T>
  : T;

interface DeepReadonlyArray1542<T> extends ReadonlyArray<DeepReadonly1542<T>> {}

type DeepReadonlyObject1542<T> = {
  readonly [P in keyof T]: DeepReadonly1542<T[P]>;
};

type UnionToIntersection1542<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1542<T> = UnionToIntersection1542<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1542<T extends unknown[], V> = [...T, V];

type TuplifyUnion1542<T, L = LastOf1542<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1542<TuplifyUnion1542<Exclude<T, L>>, L>;

type DeepPartial1542<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1542<T[P]> }
  : T;

type Paths1542<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1542<K, Paths1542<T[K], Prev1542[D]>> : never }[keyof T]
  : never;

type Prev1542 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1542<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1542 {
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

type ConfigPaths1542 = Paths1542<NestedConfig1542>;

interface HeavyProps1542 {
  config: DeepPartial1542<NestedConfig1542>;
  path?: ConfigPaths1542;
}

const HeavyComponent1542 = memo(function HeavyComponent1542({ config }: HeavyProps1542) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1542) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1542 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1542: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1542.displayName = 'HeavyComponent1542';
export default HeavyComponent1542;
