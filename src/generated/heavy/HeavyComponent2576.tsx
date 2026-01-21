'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2576<T> = T extends (infer U)[]
  ? DeepReadonlyArray2576<U>
  : T extends object
  ? DeepReadonlyObject2576<T>
  : T;

interface DeepReadonlyArray2576<T> extends ReadonlyArray<DeepReadonly2576<T>> {}

type DeepReadonlyObject2576<T> = {
  readonly [P in keyof T]: DeepReadonly2576<T[P]>;
};

type UnionToIntersection2576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2576<T> = UnionToIntersection2576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2576<T extends unknown[], V> = [...T, V];

type TuplifyUnion2576<T, L = LastOf2576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2576<TuplifyUnion2576<Exclude<T, L>>, L>;

type DeepPartial2576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2576<T[P]> }
  : T;

type Paths2576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2576<K, Paths2576<T[K], Prev2576[D]>> : never }[keyof T]
  : never;

type Prev2576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2576 {
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

type ConfigPaths2576 = Paths2576<NestedConfig2576>;

interface HeavyProps2576 {
  config: DeepPartial2576<NestedConfig2576>;
  path?: ConfigPaths2576;
}

const HeavyComponent2576 = memo(function HeavyComponent2576({ config }: HeavyProps2576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2576.displayName = 'HeavyComponent2576';
export default HeavyComponent2576;
