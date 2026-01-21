'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1357<T> = T extends (infer U)[]
  ? DeepReadonlyArray1357<U>
  : T extends object
  ? DeepReadonlyObject1357<T>
  : T;

interface DeepReadonlyArray1357<T> extends ReadonlyArray<DeepReadonly1357<T>> {}

type DeepReadonlyObject1357<T> = {
  readonly [P in keyof T]: DeepReadonly1357<T[P]>;
};

type UnionToIntersection1357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1357<T> = UnionToIntersection1357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1357<T extends unknown[], V> = [...T, V];

type TuplifyUnion1357<T, L = LastOf1357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1357<TuplifyUnion1357<Exclude<T, L>>, L>;

type DeepPartial1357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1357<T[P]> }
  : T;

type Paths1357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1357<K, Paths1357<T[K], Prev1357[D]>> : never }[keyof T]
  : never;

type Prev1357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1357 {
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

type ConfigPaths1357 = Paths1357<NestedConfig1357>;

interface HeavyProps1357 {
  config: DeepPartial1357<NestedConfig1357>;
  path?: ConfigPaths1357;
}

const HeavyComponent1357 = memo(function HeavyComponent1357({ config }: HeavyProps1357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1357.displayName = 'HeavyComponent1357';
export default HeavyComponent1357;
