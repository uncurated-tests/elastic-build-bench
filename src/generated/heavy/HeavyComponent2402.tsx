'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2402<T> = T extends (infer U)[]
  ? DeepReadonlyArray2402<U>
  : T extends object
  ? DeepReadonlyObject2402<T>
  : T;

interface DeepReadonlyArray2402<T> extends ReadonlyArray<DeepReadonly2402<T>> {}

type DeepReadonlyObject2402<T> = {
  readonly [P in keyof T]: DeepReadonly2402<T[P]>;
};

type UnionToIntersection2402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2402<T> = UnionToIntersection2402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2402<T extends unknown[], V> = [...T, V];

type TuplifyUnion2402<T, L = LastOf2402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2402<TuplifyUnion2402<Exclude<T, L>>, L>;

type DeepPartial2402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2402<T[P]> }
  : T;

type Paths2402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2402<K, Paths2402<T[K], Prev2402[D]>> : never }[keyof T]
  : never;

type Prev2402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2402 {
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

type ConfigPaths2402 = Paths2402<NestedConfig2402>;

interface HeavyProps2402 {
  config: DeepPartial2402<NestedConfig2402>;
  path?: ConfigPaths2402;
}

const HeavyComponent2402 = memo(function HeavyComponent2402({ config }: HeavyProps2402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2402.displayName = 'HeavyComponent2402';
export default HeavyComponent2402;
