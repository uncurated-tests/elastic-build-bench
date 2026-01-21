'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2407<T> = T extends (infer U)[]
  ? DeepReadonlyArray2407<U>
  : T extends object
  ? DeepReadonlyObject2407<T>
  : T;

interface DeepReadonlyArray2407<T> extends ReadonlyArray<DeepReadonly2407<T>> {}

type DeepReadonlyObject2407<T> = {
  readonly [P in keyof T]: DeepReadonly2407<T[P]>;
};

type UnionToIntersection2407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2407<T> = UnionToIntersection2407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2407<T extends unknown[], V> = [...T, V];

type TuplifyUnion2407<T, L = LastOf2407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2407<TuplifyUnion2407<Exclude<T, L>>, L>;

type DeepPartial2407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2407<T[P]> }
  : T;

type Paths2407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2407<K, Paths2407<T[K], Prev2407[D]>> : never }[keyof T]
  : never;

type Prev2407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2407 {
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

type ConfigPaths2407 = Paths2407<NestedConfig2407>;

interface HeavyProps2407 {
  config: DeepPartial2407<NestedConfig2407>;
  path?: ConfigPaths2407;
}

const HeavyComponent2407 = memo(function HeavyComponent2407({ config }: HeavyProps2407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2407.displayName = 'HeavyComponent2407';
export default HeavyComponent2407;
