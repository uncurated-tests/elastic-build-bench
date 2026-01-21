'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly346<T> = T extends (infer U)[]
  ? DeepReadonlyArray346<U>
  : T extends object
  ? DeepReadonlyObject346<T>
  : T;

interface DeepReadonlyArray346<T> extends ReadonlyArray<DeepReadonly346<T>> {}

type DeepReadonlyObject346<T> = {
  readonly [P in keyof T]: DeepReadonly346<T[P]>;
};

type UnionToIntersection346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf346<T> = UnionToIntersection346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push346<T extends unknown[], V> = [...T, V];

type TuplifyUnion346<T, L = LastOf346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push346<TuplifyUnion346<Exclude<T, L>>, L>;

type DeepPartial346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial346<T[P]> }
  : T;

type Paths346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join346<K, Paths346<T[K], Prev346[D]>> : never }[keyof T]
  : never;

type Prev346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig346 {
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

type ConfigPaths346 = Paths346<NestedConfig346>;

interface HeavyProps346 {
  config: DeepPartial346<NestedConfig346>;
  path?: ConfigPaths346;
}

const HeavyComponent346 = memo(function HeavyComponent346({ config }: HeavyProps346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent346.displayName = 'HeavyComponent346';
export default HeavyComponent346;
