'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1958<T> = T extends (infer U)[]
  ? DeepReadonlyArray1958<U>
  : T extends object
  ? DeepReadonlyObject1958<T>
  : T;

interface DeepReadonlyArray1958<T> extends ReadonlyArray<DeepReadonly1958<T>> {}

type DeepReadonlyObject1958<T> = {
  readonly [P in keyof T]: DeepReadonly1958<T[P]>;
};

type UnionToIntersection1958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1958<T> = UnionToIntersection1958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1958<T extends unknown[], V> = [...T, V];

type TuplifyUnion1958<T, L = LastOf1958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1958<TuplifyUnion1958<Exclude<T, L>>, L>;

type DeepPartial1958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1958<T[P]> }
  : T;

type Paths1958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1958<K, Paths1958<T[K], Prev1958[D]>> : never }[keyof T]
  : never;

type Prev1958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1958 {
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

type ConfigPaths1958 = Paths1958<NestedConfig1958>;

interface HeavyProps1958 {
  config: DeepPartial1958<NestedConfig1958>;
  path?: ConfigPaths1958;
}

const HeavyComponent1958 = memo(function HeavyComponent1958({ config }: HeavyProps1958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1958.displayName = 'HeavyComponent1958';
export default HeavyComponent1958;
