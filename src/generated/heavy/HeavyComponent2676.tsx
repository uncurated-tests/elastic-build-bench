'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2676<T> = T extends (infer U)[]
  ? DeepReadonlyArray2676<U>
  : T extends object
  ? DeepReadonlyObject2676<T>
  : T;

interface DeepReadonlyArray2676<T> extends ReadonlyArray<DeepReadonly2676<T>> {}

type DeepReadonlyObject2676<T> = {
  readonly [P in keyof T]: DeepReadonly2676<T[P]>;
};

type UnionToIntersection2676<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2676<T> = UnionToIntersection2676<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2676<T extends unknown[], V> = [...T, V];

type TuplifyUnion2676<T, L = LastOf2676<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2676<TuplifyUnion2676<Exclude<T, L>>, L>;

type DeepPartial2676<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2676<T[P]> }
  : T;

type Paths2676<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2676<K, Paths2676<T[K], Prev2676[D]>> : never }[keyof T]
  : never;

type Prev2676 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2676<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2676 {
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

type ConfigPaths2676 = Paths2676<NestedConfig2676>;

interface HeavyProps2676 {
  config: DeepPartial2676<NestedConfig2676>;
  path?: ConfigPaths2676;
}

const HeavyComponent2676 = memo(function HeavyComponent2676({ config }: HeavyProps2676) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2676) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2676 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2676: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2676.displayName = 'HeavyComponent2676';
export default HeavyComponent2676;
