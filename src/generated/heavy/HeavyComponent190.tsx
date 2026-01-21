'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly190<T> = T extends (infer U)[]
  ? DeepReadonlyArray190<U>
  : T extends object
  ? DeepReadonlyObject190<T>
  : T;

interface DeepReadonlyArray190<T> extends ReadonlyArray<DeepReadonly190<T>> {}

type DeepReadonlyObject190<T> = {
  readonly [P in keyof T]: DeepReadonly190<T[P]>;
};

type UnionToIntersection190<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf190<T> = UnionToIntersection190<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push190<T extends unknown[], V> = [...T, V];

type TuplifyUnion190<T, L = LastOf190<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push190<TuplifyUnion190<Exclude<T, L>>, L>;

type DeepPartial190<T> = T extends object
  ? { [P in keyof T]?: DeepPartial190<T[P]> }
  : T;

type Paths190<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join190<K, Paths190<T[K], Prev190[D]>> : never }[keyof T]
  : never;

type Prev190 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join190<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig190 {
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

type ConfigPaths190 = Paths190<NestedConfig190>;

interface HeavyProps190 {
  config: DeepPartial190<NestedConfig190>;
  path?: ConfigPaths190;
}

const HeavyComponent190 = memo(function HeavyComponent190({ config }: HeavyProps190) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 190) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-190 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H190: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent190.displayName = 'HeavyComponent190';
export default HeavyComponent190;
