'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12687<T> = T extends (infer U)[]
  ? DeepReadonlyArray12687<U>
  : T extends object
  ? DeepReadonlyObject12687<T>
  : T;

interface DeepReadonlyArray12687<T> extends ReadonlyArray<DeepReadonly12687<T>> {}

type DeepReadonlyObject12687<T> = {
  readonly [P in keyof T]: DeepReadonly12687<T[P]>;
};

type UnionToIntersection12687<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12687<T> = UnionToIntersection12687<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12687<T extends unknown[], V> = [...T, V];

type TuplifyUnion12687<T, L = LastOf12687<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12687<TuplifyUnion12687<Exclude<T, L>>, L>;

type DeepPartial12687<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12687<T[P]> }
  : T;

type Paths12687<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12687<K, Paths12687<T[K], Prev12687[D]>> : never }[keyof T]
  : never;

type Prev12687 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12687<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12687 {
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

type ConfigPaths12687 = Paths12687<NestedConfig12687>;

interface HeavyProps12687 {
  config: DeepPartial12687<NestedConfig12687>;
  path?: ConfigPaths12687;
}

const HeavyComponent12687 = memo(function HeavyComponent12687({ config }: HeavyProps12687) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12687) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12687 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12687: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12687.displayName = 'HeavyComponent12687';
export default HeavyComponent12687;
