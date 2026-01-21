'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly15<T> = T extends (infer U)[]
  ? DeepReadonlyArray15<U>
  : T extends object
  ? DeepReadonlyObject15<T>
  : T;

interface DeepReadonlyArray15<T> extends ReadonlyArray<DeepReadonly15<T>> {}

type DeepReadonlyObject15<T> = {
  readonly [P in keyof T]: DeepReadonly15<T[P]>;
};

type UnionToIntersection15<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf15<T> = UnionToIntersection15<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push15<T extends unknown[], V> = [...T, V];

type TuplifyUnion15<T, L = LastOf15<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push15<TuplifyUnion15<Exclude<T, L>>, L>;

type DeepPartial15<T> = T extends object
  ? { [P in keyof T]?: DeepPartial15<T[P]> }
  : T;

type Paths15<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join15<K, Paths15<T[K], Prev15[D]>> : never }[keyof T]
  : never;

type Prev15 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join15<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig15 {
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

type ConfigPaths15 = Paths15<NestedConfig15>;

interface HeavyProps15 {
  config: DeepPartial15<NestedConfig15>;
  path?: ConfigPaths15;
}

const HeavyComponent15 = memo(function HeavyComponent15({ config }: HeavyProps15) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 15) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-15 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H15: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent15.displayName = 'HeavyComponent15';
export default HeavyComponent15;
