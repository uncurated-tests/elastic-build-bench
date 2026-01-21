'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2046<T> = T extends (infer U)[]
  ? DeepReadonlyArray2046<U>
  : T extends object
  ? DeepReadonlyObject2046<T>
  : T;

interface DeepReadonlyArray2046<T> extends ReadonlyArray<DeepReadonly2046<T>> {}

type DeepReadonlyObject2046<T> = {
  readonly [P in keyof T]: DeepReadonly2046<T[P]>;
};

type UnionToIntersection2046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2046<T> = UnionToIntersection2046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2046<T extends unknown[], V> = [...T, V];

type TuplifyUnion2046<T, L = LastOf2046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2046<TuplifyUnion2046<Exclude<T, L>>, L>;

type DeepPartial2046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2046<T[P]> }
  : T;

type Paths2046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2046<K, Paths2046<T[K], Prev2046[D]>> : never }[keyof T]
  : never;

type Prev2046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2046 {
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

type ConfigPaths2046 = Paths2046<NestedConfig2046>;

interface HeavyProps2046 {
  config: DeepPartial2046<NestedConfig2046>;
  path?: ConfigPaths2046;
}

const HeavyComponent2046 = memo(function HeavyComponent2046({ config }: HeavyProps2046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2046.displayName = 'HeavyComponent2046';
export default HeavyComponent2046;
