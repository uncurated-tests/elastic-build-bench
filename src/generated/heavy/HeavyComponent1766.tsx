'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1766<T> = T extends (infer U)[]
  ? DeepReadonlyArray1766<U>
  : T extends object
  ? DeepReadonlyObject1766<T>
  : T;

interface DeepReadonlyArray1766<T> extends ReadonlyArray<DeepReadonly1766<T>> {}

type DeepReadonlyObject1766<T> = {
  readonly [P in keyof T]: DeepReadonly1766<T[P]>;
};

type UnionToIntersection1766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1766<T> = UnionToIntersection1766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1766<T extends unknown[], V> = [...T, V];

type TuplifyUnion1766<T, L = LastOf1766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1766<TuplifyUnion1766<Exclude<T, L>>, L>;

type DeepPartial1766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1766<T[P]> }
  : T;

type Paths1766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1766<K, Paths1766<T[K], Prev1766[D]>> : never }[keyof T]
  : never;

type Prev1766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1766 {
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

type ConfigPaths1766 = Paths1766<NestedConfig1766>;

interface HeavyProps1766 {
  config: DeepPartial1766<NestedConfig1766>;
  path?: ConfigPaths1766;
}

const HeavyComponent1766 = memo(function HeavyComponent1766({ config }: HeavyProps1766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1766.displayName = 'HeavyComponent1766';
export default HeavyComponent1766;
