'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2900<T> = T extends (infer U)[]
  ? DeepReadonlyArray2900<U>
  : T extends object
  ? DeepReadonlyObject2900<T>
  : T;

interface DeepReadonlyArray2900<T> extends ReadonlyArray<DeepReadonly2900<T>> {}

type DeepReadonlyObject2900<T> = {
  readonly [P in keyof T]: DeepReadonly2900<T[P]>;
};

type UnionToIntersection2900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2900<T> = UnionToIntersection2900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2900<T extends unknown[], V> = [...T, V];

type TuplifyUnion2900<T, L = LastOf2900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2900<TuplifyUnion2900<Exclude<T, L>>, L>;

type DeepPartial2900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2900<T[P]> }
  : T;

type Paths2900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2900<K, Paths2900<T[K], Prev2900[D]>> : never }[keyof T]
  : never;

type Prev2900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2900 {
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

type ConfigPaths2900 = Paths2900<NestedConfig2900>;

interface HeavyProps2900 {
  config: DeepPartial2900<NestedConfig2900>;
  path?: ConfigPaths2900;
}

const HeavyComponent2900 = memo(function HeavyComponent2900({ config }: HeavyProps2900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2900.displayName = 'HeavyComponent2900';
export default HeavyComponent2900;
