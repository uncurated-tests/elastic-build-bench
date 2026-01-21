'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2036<T> = T extends (infer U)[]
  ? DeepReadonlyArray2036<U>
  : T extends object
  ? DeepReadonlyObject2036<T>
  : T;

interface DeepReadonlyArray2036<T> extends ReadonlyArray<DeepReadonly2036<T>> {}

type DeepReadonlyObject2036<T> = {
  readonly [P in keyof T]: DeepReadonly2036<T[P]>;
};

type UnionToIntersection2036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2036<T> = UnionToIntersection2036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2036<T extends unknown[], V> = [...T, V];

type TuplifyUnion2036<T, L = LastOf2036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2036<TuplifyUnion2036<Exclude<T, L>>, L>;

type DeepPartial2036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2036<T[P]> }
  : T;

type Paths2036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2036<K, Paths2036<T[K], Prev2036[D]>> : never }[keyof T]
  : never;

type Prev2036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2036 {
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

type ConfigPaths2036 = Paths2036<NestedConfig2036>;

interface HeavyProps2036 {
  config: DeepPartial2036<NestedConfig2036>;
  path?: ConfigPaths2036;
}

const HeavyComponent2036 = memo(function HeavyComponent2036({ config }: HeavyProps2036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2036.displayName = 'HeavyComponent2036';
export default HeavyComponent2036;
