'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1407<T> = T extends (infer U)[]
  ? DeepReadonlyArray1407<U>
  : T extends object
  ? DeepReadonlyObject1407<T>
  : T;

interface DeepReadonlyArray1407<T> extends ReadonlyArray<DeepReadonly1407<T>> {}

type DeepReadonlyObject1407<T> = {
  readonly [P in keyof T]: DeepReadonly1407<T[P]>;
};

type UnionToIntersection1407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1407<T> = UnionToIntersection1407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1407<T extends unknown[], V> = [...T, V];

type TuplifyUnion1407<T, L = LastOf1407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1407<TuplifyUnion1407<Exclude<T, L>>, L>;

type DeepPartial1407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1407<T[P]> }
  : T;

type Paths1407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1407<K, Paths1407<T[K], Prev1407[D]>> : never }[keyof T]
  : never;

type Prev1407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1407 {
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

type ConfigPaths1407 = Paths1407<NestedConfig1407>;

interface HeavyProps1407 {
  config: DeepPartial1407<NestedConfig1407>;
  path?: ConfigPaths1407;
}

const HeavyComponent1407 = memo(function HeavyComponent1407({ config }: HeavyProps1407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1407.displayName = 'HeavyComponent1407';
export default HeavyComponent1407;
