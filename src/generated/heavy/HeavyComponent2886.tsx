'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2886<T> = T extends (infer U)[]
  ? DeepReadonlyArray2886<U>
  : T extends object
  ? DeepReadonlyObject2886<T>
  : T;

interface DeepReadonlyArray2886<T> extends ReadonlyArray<DeepReadonly2886<T>> {}

type DeepReadonlyObject2886<T> = {
  readonly [P in keyof T]: DeepReadonly2886<T[P]>;
};

type UnionToIntersection2886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2886<T> = UnionToIntersection2886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2886<T extends unknown[], V> = [...T, V];

type TuplifyUnion2886<T, L = LastOf2886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2886<TuplifyUnion2886<Exclude<T, L>>, L>;

type DeepPartial2886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2886<T[P]> }
  : T;

type Paths2886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2886<K, Paths2886<T[K], Prev2886[D]>> : never }[keyof T]
  : never;

type Prev2886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2886 {
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

type ConfigPaths2886 = Paths2886<NestedConfig2886>;

interface HeavyProps2886 {
  config: DeepPartial2886<NestedConfig2886>;
  path?: ConfigPaths2886;
}

const HeavyComponent2886 = memo(function HeavyComponent2886({ config }: HeavyProps2886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2886.displayName = 'HeavyComponent2886';
export default HeavyComponent2886;
