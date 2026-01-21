'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1171<T> = T extends (infer U)[]
  ? DeepReadonlyArray1171<U>
  : T extends object
  ? DeepReadonlyObject1171<T>
  : T;

interface DeepReadonlyArray1171<T> extends ReadonlyArray<DeepReadonly1171<T>> {}

type DeepReadonlyObject1171<T> = {
  readonly [P in keyof T]: DeepReadonly1171<T[P]>;
};

type UnionToIntersection1171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1171<T> = UnionToIntersection1171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1171<T extends unknown[], V> = [...T, V];

type TuplifyUnion1171<T, L = LastOf1171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1171<TuplifyUnion1171<Exclude<T, L>>, L>;

type DeepPartial1171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1171<T[P]> }
  : T;

type Paths1171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1171<K, Paths1171<T[K], Prev1171[D]>> : never }[keyof T]
  : never;

type Prev1171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1171 {
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

type ConfigPaths1171 = Paths1171<NestedConfig1171>;

interface HeavyProps1171 {
  config: DeepPartial1171<NestedConfig1171>;
  path?: ConfigPaths1171;
}

const HeavyComponent1171 = memo(function HeavyComponent1171({ config }: HeavyProps1171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1171.displayName = 'HeavyComponent1171';
export default HeavyComponent1171;
