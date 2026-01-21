'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1130<T> = T extends (infer U)[]
  ? DeepReadonlyArray1130<U>
  : T extends object
  ? DeepReadonlyObject1130<T>
  : T;

interface DeepReadonlyArray1130<T> extends ReadonlyArray<DeepReadonly1130<T>> {}

type DeepReadonlyObject1130<T> = {
  readonly [P in keyof T]: DeepReadonly1130<T[P]>;
};

type UnionToIntersection1130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1130<T> = UnionToIntersection1130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1130<T extends unknown[], V> = [...T, V];

type TuplifyUnion1130<T, L = LastOf1130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1130<TuplifyUnion1130<Exclude<T, L>>, L>;

type DeepPartial1130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1130<T[P]> }
  : T;

type Paths1130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1130<K, Paths1130<T[K], Prev1130[D]>> : never }[keyof T]
  : never;

type Prev1130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1130 {
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

type ConfigPaths1130 = Paths1130<NestedConfig1130>;

interface HeavyProps1130 {
  config: DeepPartial1130<NestedConfig1130>;
  path?: ConfigPaths1130;
}

const HeavyComponent1130 = memo(function HeavyComponent1130({ config }: HeavyProps1130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1130.displayName = 'HeavyComponent1130';
export default HeavyComponent1130;
