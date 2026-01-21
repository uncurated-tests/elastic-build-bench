'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2460<T> = T extends (infer U)[]
  ? DeepReadonlyArray2460<U>
  : T extends object
  ? DeepReadonlyObject2460<T>
  : T;

interface DeepReadonlyArray2460<T> extends ReadonlyArray<DeepReadonly2460<T>> {}

type DeepReadonlyObject2460<T> = {
  readonly [P in keyof T]: DeepReadonly2460<T[P]>;
};

type UnionToIntersection2460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2460<T> = UnionToIntersection2460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2460<T extends unknown[], V> = [...T, V];

type TuplifyUnion2460<T, L = LastOf2460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2460<TuplifyUnion2460<Exclude<T, L>>, L>;

type DeepPartial2460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2460<T[P]> }
  : T;

type Paths2460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2460<K, Paths2460<T[K], Prev2460[D]>> : never }[keyof T]
  : never;

type Prev2460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2460 {
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

type ConfigPaths2460 = Paths2460<NestedConfig2460>;

interface HeavyProps2460 {
  config: DeepPartial2460<NestedConfig2460>;
  path?: ConfigPaths2460;
}

const HeavyComponent2460 = memo(function HeavyComponent2460({ config }: HeavyProps2460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2460.displayName = 'HeavyComponent2460';
export default HeavyComponent2460;
