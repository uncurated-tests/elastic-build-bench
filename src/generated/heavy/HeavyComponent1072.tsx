'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1072<T> = T extends (infer U)[]
  ? DeepReadonlyArray1072<U>
  : T extends object
  ? DeepReadonlyObject1072<T>
  : T;

interface DeepReadonlyArray1072<T> extends ReadonlyArray<DeepReadonly1072<T>> {}

type DeepReadonlyObject1072<T> = {
  readonly [P in keyof T]: DeepReadonly1072<T[P]>;
};

type UnionToIntersection1072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1072<T> = UnionToIntersection1072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1072<T extends unknown[], V> = [...T, V];

type TuplifyUnion1072<T, L = LastOf1072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1072<TuplifyUnion1072<Exclude<T, L>>, L>;

type DeepPartial1072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1072<T[P]> }
  : T;

type Paths1072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1072<K, Paths1072<T[K], Prev1072[D]>> : never }[keyof T]
  : never;

type Prev1072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1072 {
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

type ConfigPaths1072 = Paths1072<NestedConfig1072>;

interface HeavyProps1072 {
  config: DeepPartial1072<NestedConfig1072>;
  path?: ConfigPaths1072;
}

const HeavyComponent1072 = memo(function HeavyComponent1072({ config }: HeavyProps1072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1072.displayName = 'HeavyComponent1072';
export default HeavyComponent1072;
