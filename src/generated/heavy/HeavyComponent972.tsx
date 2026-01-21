'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly972<T> = T extends (infer U)[]
  ? DeepReadonlyArray972<U>
  : T extends object
  ? DeepReadonlyObject972<T>
  : T;

interface DeepReadonlyArray972<T> extends ReadonlyArray<DeepReadonly972<T>> {}

type DeepReadonlyObject972<T> = {
  readonly [P in keyof T]: DeepReadonly972<T[P]>;
};

type UnionToIntersection972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf972<T> = UnionToIntersection972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push972<T extends unknown[], V> = [...T, V];

type TuplifyUnion972<T, L = LastOf972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push972<TuplifyUnion972<Exclude<T, L>>, L>;

type DeepPartial972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial972<T[P]> }
  : T;

type Paths972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join972<K, Paths972<T[K], Prev972[D]>> : never }[keyof T]
  : never;

type Prev972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig972 {
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

type ConfigPaths972 = Paths972<NestedConfig972>;

interface HeavyProps972 {
  config: DeepPartial972<NestedConfig972>;
  path?: ConfigPaths972;
}

const HeavyComponent972 = memo(function HeavyComponent972({ config }: HeavyProps972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent972.displayName = 'HeavyComponent972';
export default HeavyComponent972;
