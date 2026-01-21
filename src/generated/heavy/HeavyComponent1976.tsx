'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1976<T> = T extends (infer U)[]
  ? DeepReadonlyArray1976<U>
  : T extends object
  ? DeepReadonlyObject1976<T>
  : T;

interface DeepReadonlyArray1976<T> extends ReadonlyArray<DeepReadonly1976<T>> {}

type DeepReadonlyObject1976<T> = {
  readonly [P in keyof T]: DeepReadonly1976<T[P]>;
};

type UnionToIntersection1976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1976<T> = UnionToIntersection1976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1976<T extends unknown[], V> = [...T, V];

type TuplifyUnion1976<T, L = LastOf1976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1976<TuplifyUnion1976<Exclude<T, L>>, L>;

type DeepPartial1976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1976<T[P]> }
  : T;

type Paths1976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1976<K, Paths1976<T[K], Prev1976[D]>> : never }[keyof T]
  : never;

type Prev1976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1976 {
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

type ConfigPaths1976 = Paths1976<NestedConfig1976>;

interface HeavyProps1976 {
  config: DeepPartial1976<NestedConfig1976>;
  path?: ConfigPaths1976;
}

const HeavyComponent1976 = memo(function HeavyComponent1976({ config }: HeavyProps1976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1976.displayName = 'HeavyComponent1976';
export default HeavyComponent1976;
