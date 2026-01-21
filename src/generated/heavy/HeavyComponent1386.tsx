'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1386<T> = T extends (infer U)[]
  ? DeepReadonlyArray1386<U>
  : T extends object
  ? DeepReadonlyObject1386<T>
  : T;

interface DeepReadonlyArray1386<T> extends ReadonlyArray<DeepReadonly1386<T>> {}

type DeepReadonlyObject1386<T> = {
  readonly [P in keyof T]: DeepReadonly1386<T[P]>;
};

type UnionToIntersection1386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1386<T> = UnionToIntersection1386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1386<T extends unknown[], V> = [...T, V];

type TuplifyUnion1386<T, L = LastOf1386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1386<TuplifyUnion1386<Exclude<T, L>>, L>;

type DeepPartial1386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1386<T[P]> }
  : T;

type Paths1386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1386<K, Paths1386<T[K], Prev1386[D]>> : never }[keyof T]
  : never;

type Prev1386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1386 {
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

type ConfigPaths1386 = Paths1386<NestedConfig1386>;

interface HeavyProps1386 {
  config: DeepPartial1386<NestedConfig1386>;
  path?: ConfigPaths1386;
}

const HeavyComponent1386 = memo(function HeavyComponent1386({ config }: HeavyProps1386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1386.displayName = 'HeavyComponent1386';
export default HeavyComponent1386;
