'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly420<T> = T extends (infer U)[]
  ? DeepReadonlyArray420<U>
  : T extends object
  ? DeepReadonlyObject420<T>
  : T;

interface DeepReadonlyArray420<T> extends ReadonlyArray<DeepReadonly420<T>> {}

type DeepReadonlyObject420<T> = {
  readonly [P in keyof T]: DeepReadonly420<T[P]>;
};

type UnionToIntersection420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf420<T> = UnionToIntersection420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push420<T extends unknown[], V> = [...T, V];

type TuplifyUnion420<T, L = LastOf420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push420<TuplifyUnion420<Exclude<T, L>>, L>;

type DeepPartial420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial420<T[P]> }
  : T;

type Paths420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join420<K, Paths420<T[K], Prev420[D]>> : never }[keyof T]
  : never;

type Prev420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig420 {
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

type ConfigPaths420 = Paths420<NestedConfig420>;

interface HeavyProps420 {
  config: DeepPartial420<NestedConfig420>;
  path?: ConfigPaths420;
}

const HeavyComponent420 = memo(function HeavyComponent420({ config }: HeavyProps420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent420.displayName = 'HeavyComponent420';
export default HeavyComponent420;
