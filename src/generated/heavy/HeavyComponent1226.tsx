'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1226<T> = T extends (infer U)[]
  ? DeepReadonlyArray1226<U>
  : T extends object
  ? DeepReadonlyObject1226<T>
  : T;

interface DeepReadonlyArray1226<T> extends ReadonlyArray<DeepReadonly1226<T>> {}

type DeepReadonlyObject1226<T> = {
  readonly [P in keyof T]: DeepReadonly1226<T[P]>;
};

type UnionToIntersection1226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1226<T> = UnionToIntersection1226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1226<T extends unknown[], V> = [...T, V];

type TuplifyUnion1226<T, L = LastOf1226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1226<TuplifyUnion1226<Exclude<T, L>>, L>;

type DeepPartial1226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1226<T[P]> }
  : T;

type Paths1226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1226<K, Paths1226<T[K], Prev1226[D]>> : never }[keyof T]
  : never;

type Prev1226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1226 {
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

type ConfigPaths1226 = Paths1226<NestedConfig1226>;

interface HeavyProps1226 {
  config: DeepPartial1226<NestedConfig1226>;
  path?: ConfigPaths1226;
}

const HeavyComponent1226 = memo(function HeavyComponent1226({ config }: HeavyProps1226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1226.displayName = 'HeavyComponent1226';
export default HeavyComponent1226;
