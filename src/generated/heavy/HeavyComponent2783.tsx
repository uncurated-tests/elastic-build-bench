'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2783<T> = T extends (infer U)[]
  ? DeepReadonlyArray2783<U>
  : T extends object
  ? DeepReadonlyObject2783<T>
  : T;

interface DeepReadonlyArray2783<T> extends ReadonlyArray<DeepReadonly2783<T>> {}

type DeepReadonlyObject2783<T> = {
  readonly [P in keyof T]: DeepReadonly2783<T[P]>;
};

type UnionToIntersection2783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2783<T> = UnionToIntersection2783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2783<T extends unknown[], V> = [...T, V];

type TuplifyUnion2783<T, L = LastOf2783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2783<TuplifyUnion2783<Exclude<T, L>>, L>;

type DeepPartial2783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2783<T[P]> }
  : T;

type Paths2783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2783<K, Paths2783<T[K], Prev2783[D]>> : never }[keyof T]
  : never;

type Prev2783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2783 {
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

type ConfigPaths2783 = Paths2783<NestedConfig2783>;

interface HeavyProps2783 {
  config: DeepPartial2783<NestedConfig2783>;
  path?: ConfigPaths2783;
}

const HeavyComponent2783 = memo(function HeavyComponent2783({ config }: HeavyProps2783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2783.displayName = 'HeavyComponent2783';
export default HeavyComponent2783;
