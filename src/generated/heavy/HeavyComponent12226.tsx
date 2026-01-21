'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12226<T> = T extends (infer U)[]
  ? DeepReadonlyArray12226<U>
  : T extends object
  ? DeepReadonlyObject12226<T>
  : T;

interface DeepReadonlyArray12226<T> extends ReadonlyArray<DeepReadonly12226<T>> {}

type DeepReadonlyObject12226<T> = {
  readonly [P in keyof T]: DeepReadonly12226<T[P]>;
};

type UnionToIntersection12226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12226<T> = UnionToIntersection12226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12226<T extends unknown[], V> = [...T, V];

type TuplifyUnion12226<T, L = LastOf12226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12226<TuplifyUnion12226<Exclude<T, L>>, L>;

type DeepPartial12226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12226<T[P]> }
  : T;

type Paths12226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12226<K, Paths12226<T[K], Prev12226[D]>> : never }[keyof T]
  : never;

type Prev12226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12226 {
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

type ConfigPaths12226 = Paths12226<NestedConfig12226>;

interface HeavyProps12226 {
  config: DeepPartial12226<NestedConfig12226>;
  path?: ConfigPaths12226;
}

const HeavyComponent12226 = memo(function HeavyComponent12226({ config }: HeavyProps12226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12226.displayName = 'HeavyComponent12226';
export default HeavyComponent12226;
