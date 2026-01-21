'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1532<T> = T extends (infer U)[]
  ? DeepReadonlyArray1532<U>
  : T extends object
  ? DeepReadonlyObject1532<T>
  : T;

interface DeepReadonlyArray1532<T> extends ReadonlyArray<DeepReadonly1532<T>> {}

type DeepReadonlyObject1532<T> = {
  readonly [P in keyof T]: DeepReadonly1532<T[P]>;
};

type UnionToIntersection1532<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1532<T> = UnionToIntersection1532<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1532<T extends unknown[], V> = [...T, V];

type TuplifyUnion1532<T, L = LastOf1532<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1532<TuplifyUnion1532<Exclude<T, L>>, L>;

type DeepPartial1532<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1532<T[P]> }
  : T;

type Paths1532<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1532<K, Paths1532<T[K], Prev1532[D]>> : never }[keyof T]
  : never;

type Prev1532 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1532<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1532 {
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

type ConfigPaths1532 = Paths1532<NestedConfig1532>;

interface HeavyProps1532 {
  config: DeepPartial1532<NestedConfig1532>;
  path?: ConfigPaths1532;
}

const HeavyComponent1532 = memo(function HeavyComponent1532({ config }: HeavyProps1532) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1532) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1532 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1532: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1532.displayName = 'HeavyComponent1532';
export default HeavyComponent1532;
