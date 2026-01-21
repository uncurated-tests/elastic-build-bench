'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2214<T> = T extends (infer U)[]
  ? DeepReadonlyArray2214<U>
  : T extends object
  ? DeepReadonlyObject2214<T>
  : T;

interface DeepReadonlyArray2214<T> extends ReadonlyArray<DeepReadonly2214<T>> {}

type DeepReadonlyObject2214<T> = {
  readonly [P in keyof T]: DeepReadonly2214<T[P]>;
};

type UnionToIntersection2214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2214<T> = UnionToIntersection2214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2214<T extends unknown[], V> = [...T, V];

type TuplifyUnion2214<T, L = LastOf2214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2214<TuplifyUnion2214<Exclude<T, L>>, L>;

type DeepPartial2214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2214<T[P]> }
  : T;

type Paths2214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2214<K, Paths2214<T[K], Prev2214[D]>> : never }[keyof T]
  : never;

type Prev2214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2214 {
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

type ConfigPaths2214 = Paths2214<NestedConfig2214>;

interface HeavyProps2214 {
  config: DeepPartial2214<NestedConfig2214>;
  path?: ConfigPaths2214;
}

const HeavyComponent2214 = memo(function HeavyComponent2214({ config }: HeavyProps2214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2214.displayName = 'HeavyComponent2214';
export default HeavyComponent2214;
