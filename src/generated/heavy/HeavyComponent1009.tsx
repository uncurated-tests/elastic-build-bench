'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1009<T> = T extends (infer U)[]
  ? DeepReadonlyArray1009<U>
  : T extends object
  ? DeepReadonlyObject1009<T>
  : T;

interface DeepReadonlyArray1009<T> extends ReadonlyArray<DeepReadonly1009<T>> {}

type DeepReadonlyObject1009<T> = {
  readonly [P in keyof T]: DeepReadonly1009<T[P]>;
};

type UnionToIntersection1009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1009<T> = UnionToIntersection1009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1009<T extends unknown[], V> = [...T, V];

type TuplifyUnion1009<T, L = LastOf1009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1009<TuplifyUnion1009<Exclude<T, L>>, L>;

type DeepPartial1009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1009<T[P]> }
  : T;

type Paths1009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1009<K, Paths1009<T[K], Prev1009[D]>> : never }[keyof T]
  : never;

type Prev1009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1009 {
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

type ConfigPaths1009 = Paths1009<NestedConfig1009>;

interface HeavyProps1009 {
  config: DeepPartial1009<NestedConfig1009>;
  path?: ConfigPaths1009;
}

const HeavyComponent1009 = memo(function HeavyComponent1009({ config }: HeavyProps1009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1009.displayName = 'HeavyComponent1009';
export default HeavyComponent1009;
