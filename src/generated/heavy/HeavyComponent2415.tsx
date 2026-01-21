'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2415<T> = T extends (infer U)[]
  ? DeepReadonlyArray2415<U>
  : T extends object
  ? DeepReadonlyObject2415<T>
  : T;

interface DeepReadonlyArray2415<T> extends ReadonlyArray<DeepReadonly2415<T>> {}

type DeepReadonlyObject2415<T> = {
  readonly [P in keyof T]: DeepReadonly2415<T[P]>;
};

type UnionToIntersection2415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2415<T> = UnionToIntersection2415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2415<T extends unknown[], V> = [...T, V];

type TuplifyUnion2415<T, L = LastOf2415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2415<TuplifyUnion2415<Exclude<T, L>>, L>;

type DeepPartial2415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2415<T[P]> }
  : T;

type Paths2415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2415<K, Paths2415<T[K], Prev2415[D]>> : never }[keyof T]
  : never;

type Prev2415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2415 {
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

type ConfigPaths2415 = Paths2415<NestedConfig2415>;

interface HeavyProps2415 {
  config: DeepPartial2415<NestedConfig2415>;
  path?: ConfigPaths2415;
}

const HeavyComponent2415 = memo(function HeavyComponent2415({ config }: HeavyProps2415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2415.displayName = 'HeavyComponent2415';
export default HeavyComponent2415;
