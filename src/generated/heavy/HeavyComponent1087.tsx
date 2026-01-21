'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1087<T> = T extends (infer U)[]
  ? DeepReadonlyArray1087<U>
  : T extends object
  ? DeepReadonlyObject1087<T>
  : T;

interface DeepReadonlyArray1087<T> extends ReadonlyArray<DeepReadonly1087<T>> {}

type DeepReadonlyObject1087<T> = {
  readonly [P in keyof T]: DeepReadonly1087<T[P]>;
};

type UnionToIntersection1087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1087<T> = UnionToIntersection1087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1087<T extends unknown[], V> = [...T, V];

type TuplifyUnion1087<T, L = LastOf1087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1087<TuplifyUnion1087<Exclude<T, L>>, L>;

type DeepPartial1087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1087<T[P]> }
  : T;

type Paths1087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1087<K, Paths1087<T[K], Prev1087[D]>> : never }[keyof T]
  : never;

type Prev1087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1087 {
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

type ConfigPaths1087 = Paths1087<NestedConfig1087>;

interface HeavyProps1087 {
  config: DeepPartial1087<NestedConfig1087>;
  path?: ConfigPaths1087;
}

const HeavyComponent1087 = memo(function HeavyComponent1087({ config }: HeavyProps1087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1087.displayName = 'HeavyComponent1087';
export default HeavyComponent1087;
