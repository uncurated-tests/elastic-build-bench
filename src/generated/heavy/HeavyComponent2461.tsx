'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2461<T> = T extends (infer U)[]
  ? DeepReadonlyArray2461<U>
  : T extends object
  ? DeepReadonlyObject2461<T>
  : T;

interface DeepReadonlyArray2461<T> extends ReadonlyArray<DeepReadonly2461<T>> {}

type DeepReadonlyObject2461<T> = {
  readonly [P in keyof T]: DeepReadonly2461<T[P]>;
};

type UnionToIntersection2461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2461<T> = UnionToIntersection2461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2461<T extends unknown[], V> = [...T, V];

type TuplifyUnion2461<T, L = LastOf2461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2461<TuplifyUnion2461<Exclude<T, L>>, L>;

type DeepPartial2461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2461<T[P]> }
  : T;

type Paths2461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2461<K, Paths2461<T[K], Prev2461[D]>> : never }[keyof T]
  : never;

type Prev2461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2461 {
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

type ConfigPaths2461 = Paths2461<NestedConfig2461>;

interface HeavyProps2461 {
  config: DeepPartial2461<NestedConfig2461>;
  path?: ConfigPaths2461;
}

const HeavyComponent2461 = memo(function HeavyComponent2461({ config }: HeavyProps2461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2461.displayName = 'HeavyComponent2461';
export default HeavyComponent2461;
