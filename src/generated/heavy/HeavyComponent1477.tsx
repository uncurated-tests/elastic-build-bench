'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1477<T> = T extends (infer U)[]
  ? DeepReadonlyArray1477<U>
  : T extends object
  ? DeepReadonlyObject1477<T>
  : T;

interface DeepReadonlyArray1477<T> extends ReadonlyArray<DeepReadonly1477<T>> {}

type DeepReadonlyObject1477<T> = {
  readonly [P in keyof T]: DeepReadonly1477<T[P]>;
};

type UnionToIntersection1477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1477<T> = UnionToIntersection1477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1477<T extends unknown[], V> = [...T, V];

type TuplifyUnion1477<T, L = LastOf1477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1477<TuplifyUnion1477<Exclude<T, L>>, L>;

type DeepPartial1477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1477<T[P]> }
  : T;

type Paths1477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1477<K, Paths1477<T[K], Prev1477[D]>> : never }[keyof T]
  : never;

type Prev1477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1477 {
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

type ConfigPaths1477 = Paths1477<NestedConfig1477>;

interface HeavyProps1477 {
  config: DeepPartial1477<NestedConfig1477>;
  path?: ConfigPaths1477;
}

const HeavyComponent1477 = memo(function HeavyComponent1477({ config }: HeavyProps1477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1477.displayName = 'HeavyComponent1477';
export default HeavyComponent1477;
