'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2641<T> = T extends (infer U)[]
  ? DeepReadonlyArray2641<U>
  : T extends object
  ? DeepReadonlyObject2641<T>
  : T;

interface DeepReadonlyArray2641<T> extends ReadonlyArray<DeepReadonly2641<T>> {}

type DeepReadonlyObject2641<T> = {
  readonly [P in keyof T]: DeepReadonly2641<T[P]>;
};

type UnionToIntersection2641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2641<T> = UnionToIntersection2641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2641<T extends unknown[], V> = [...T, V];

type TuplifyUnion2641<T, L = LastOf2641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2641<TuplifyUnion2641<Exclude<T, L>>, L>;

type DeepPartial2641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2641<T[P]> }
  : T;

type Paths2641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2641<K, Paths2641<T[K], Prev2641[D]>> : never }[keyof T]
  : never;

type Prev2641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2641 {
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

type ConfigPaths2641 = Paths2641<NestedConfig2641>;

interface HeavyProps2641 {
  config: DeepPartial2641<NestedConfig2641>;
  path?: ConfigPaths2641;
}

const HeavyComponent2641 = memo(function HeavyComponent2641({ config }: HeavyProps2641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2641.displayName = 'HeavyComponent2641';
export default HeavyComponent2641;
