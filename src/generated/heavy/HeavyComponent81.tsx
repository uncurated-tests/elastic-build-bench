'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly81<T> = T extends (infer U)[]
  ? DeepReadonlyArray81<U>
  : T extends object
  ? DeepReadonlyObject81<T>
  : T;

interface DeepReadonlyArray81<T> extends ReadonlyArray<DeepReadonly81<T>> {}

type DeepReadonlyObject81<T> = {
  readonly [P in keyof T]: DeepReadonly81<T[P]>;
};

type UnionToIntersection81<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf81<T> = UnionToIntersection81<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push81<T extends unknown[], V> = [...T, V];

type TuplifyUnion81<T, L = LastOf81<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push81<TuplifyUnion81<Exclude<T, L>>, L>;

type DeepPartial81<T> = T extends object
  ? { [P in keyof T]?: DeepPartial81<T[P]> }
  : T;

type Paths81<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join81<K, Paths81<T[K], Prev81[D]>> : never }[keyof T]
  : never;

type Prev81 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join81<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig81 {
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

type ConfigPaths81 = Paths81<NestedConfig81>;

interface HeavyProps81 {
  config: DeepPartial81<NestedConfig81>;
  path?: ConfigPaths81;
}

const HeavyComponent81 = memo(function HeavyComponent81({ config }: HeavyProps81) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 81) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-81 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H81: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent81.displayName = 'HeavyComponent81';
export default HeavyComponent81;
