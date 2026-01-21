'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1457<T> = T extends (infer U)[]
  ? DeepReadonlyArray1457<U>
  : T extends object
  ? DeepReadonlyObject1457<T>
  : T;

interface DeepReadonlyArray1457<T> extends ReadonlyArray<DeepReadonly1457<T>> {}

type DeepReadonlyObject1457<T> = {
  readonly [P in keyof T]: DeepReadonly1457<T[P]>;
};

type UnionToIntersection1457<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1457<T> = UnionToIntersection1457<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1457<T extends unknown[], V> = [...T, V];

type TuplifyUnion1457<T, L = LastOf1457<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1457<TuplifyUnion1457<Exclude<T, L>>, L>;

type DeepPartial1457<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1457<T[P]> }
  : T;

type Paths1457<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1457<K, Paths1457<T[K], Prev1457[D]>> : never }[keyof T]
  : never;

type Prev1457 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1457<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1457 {
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

type ConfigPaths1457 = Paths1457<NestedConfig1457>;

interface HeavyProps1457 {
  config: DeepPartial1457<NestedConfig1457>;
  path?: ConfigPaths1457;
}

const HeavyComponent1457 = memo(function HeavyComponent1457({ config }: HeavyProps1457) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1457) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1457 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1457: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1457.displayName = 'HeavyComponent1457';
export default HeavyComponent1457;
