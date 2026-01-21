'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1627<T> = T extends (infer U)[]
  ? DeepReadonlyArray1627<U>
  : T extends object
  ? DeepReadonlyObject1627<T>
  : T;

interface DeepReadonlyArray1627<T> extends ReadonlyArray<DeepReadonly1627<T>> {}

type DeepReadonlyObject1627<T> = {
  readonly [P in keyof T]: DeepReadonly1627<T[P]>;
};

type UnionToIntersection1627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1627<T> = UnionToIntersection1627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1627<T extends unknown[], V> = [...T, V];

type TuplifyUnion1627<T, L = LastOf1627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1627<TuplifyUnion1627<Exclude<T, L>>, L>;

type DeepPartial1627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1627<T[P]> }
  : T;

type Paths1627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1627<K, Paths1627<T[K], Prev1627[D]>> : never }[keyof T]
  : never;

type Prev1627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1627 {
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

type ConfigPaths1627 = Paths1627<NestedConfig1627>;

interface HeavyProps1627 {
  config: DeepPartial1627<NestedConfig1627>;
  path?: ConfigPaths1627;
}

const HeavyComponent1627 = memo(function HeavyComponent1627({ config }: HeavyProps1627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1627.displayName = 'HeavyComponent1627';
export default HeavyComponent1627;
