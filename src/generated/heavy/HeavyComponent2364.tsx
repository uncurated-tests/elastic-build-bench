'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2364<T> = T extends (infer U)[]
  ? DeepReadonlyArray2364<U>
  : T extends object
  ? DeepReadonlyObject2364<T>
  : T;

interface DeepReadonlyArray2364<T> extends ReadonlyArray<DeepReadonly2364<T>> {}

type DeepReadonlyObject2364<T> = {
  readonly [P in keyof T]: DeepReadonly2364<T[P]>;
};

type UnionToIntersection2364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2364<T> = UnionToIntersection2364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2364<T extends unknown[], V> = [...T, V];

type TuplifyUnion2364<T, L = LastOf2364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2364<TuplifyUnion2364<Exclude<T, L>>, L>;

type DeepPartial2364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2364<T[P]> }
  : T;

type Paths2364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2364<K, Paths2364<T[K], Prev2364[D]>> : never }[keyof T]
  : never;

type Prev2364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2364 {
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

type ConfigPaths2364 = Paths2364<NestedConfig2364>;

interface HeavyProps2364 {
  config: DeepPartial2364<NestedConfig2364>;
  path?: ConfigPaths2364;
}

const HeavyComponent2364 = memo(function HeavyComponent2364({ config }: HeavyProps2364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2364.displayName = 'HeavyComponent2364';
export default HeavyComponent2364;
