'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1305<T> = T extends (infer U)[]
  ? DeepReadonlyArray1305<U>
  : T extends object
  ? DeepReadonlyObject1305<T>
  : T;

interface DeepReadonlyArray1305<T> extends ReadonlyArray<DeepReadonly1305<T>> {}

type DeepReadonlyObject1305<T> = {
  readonly [P in keyof T]: DeepReadonly1305<T[P]>;
};

type UnionToIntersection1305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1305<T> = UnionToIntersection1305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1305<T extends unknown[], V> = [...T, V];

type TuplifyUnion1305<T, L = LastOf1305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1305<TuplifyUnion1305<Exclude<T, L>>, L>;

type DeepPartial1305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1305<T[P]> }
  : T;

type Paths1305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1305<K, Paths1305<T[K], Prev1305[D]>> : never }[keyof T]
  : never;

type Prev1305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1305 {
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

type ConfigPaths1305 = Paths1305<NestedConfig1305>;

interface HeavyProps1305 {
  config: DeepPartial1305<NestedConfig1305>;
  path?: ConfigPaths1305;
}

const HeavyComponent1305 = memo(function HeavyComponent1305({ config }: HeavyProps1305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1305.displayName = 'HeavyComponent1305';
export default HeavyComponent1305;
