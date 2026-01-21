'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1382<T> = T extends (infer U)[]
  ? DeepReadonlyArray1382<U>
  : T extends object
  ? DeepReadonlyObject1382<T>
  : T;

interface DeepReadonlyArray1382<T> extends ReadonlyArray<DeepReadonly1382<T>> {}

type DeepReadonlyObject1382<T> = {
  readonly [P in keyof T]: DeepReadonly1382<T[P]>;
};

type UnionToIntersection1382<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1382<T> = UnionToIntersection1382<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1382<T extends unknown[], V> = [...T, V];

type TuplifyUnion1382<T, L = LastOf1382<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1382<TuplifyUnion1382<Exclude<T, L>>, L>;

type DeepPartial1382<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1382<T[P]> }
  : T;

type Paths1382<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1382<K, Paths1382<T[K], Prev1382[D]>> : never }[keyof T]
  : never;

type Prev1382 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1382<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1382 {
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

type ConfigPaths1382 = Paths1382<NestedConfig1382>;

interface HeavyProps1382 {
  config: DeepPartial1382<NestedConfig1382>;
  path?: ConfigPaths1382;
}

const HeavyComponent1382 = memo(function HeavyComponent1382({ config }: HeavyProps1382) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1382) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1382 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1382: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1382.displayName = 'HeavyComponent1382';
export default HeavyComponent1382;
