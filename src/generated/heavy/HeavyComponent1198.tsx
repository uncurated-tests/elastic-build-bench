'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1198<T> = T extends (infer U)[]
  ? DeepReadonlyArray1198<U>
  : T extends object
  ? DeepReadonlyObject1198<T>
  : T;

interface DeepReadonlyArray1198<T> extends ReadonlyArray<DeepReadonly1198<T>> {}

type DeepReadonlyObject1198<T> = {
  readonly [P in keyof T]: DeepReadonly1198<T[P]>;
};

type UnionToIntersection1198<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1198<T> = UnionToIntersection1198<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1198<T extends unknown[], V> = [...T, V];

type TuplifyUnion1198<T, L = LastOf1198<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1198<TuplifyUnion1198<Exclude<T, L>>, L>;

type DeepPartial1198<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1198<T[P]> }
  : T;

type Paths1198<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1198<K, Paths1198<T[K], Prev1198[D]>> : never }[keyof T]
  : never;

type Prev1198 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1198<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1198 {
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

type ConfigPaths1198 = Paths1198<NestedConfig1198>;

interface HeavyProps1198 {
  config: DeepPartial1198<NestedConfig1198>;
  path?: ConfigPaths1198;
}

const HeavyComponent1198 = memo(function HeavyComponent1198({ config }: HeavyProps1198) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1198) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1198 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1198: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1198.displayName = 'HeavyComponent1198';
export default HeavyComponent1198;
