'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2978<T> = T extends (infer U)[]
  ? DeepReadonlyArray2978<U>
  : T extends object
  ? DeepReadonlyObject2978<T>
  : T;

interface DeepReadonlyArray2978<T> extends ReadonlyArray<DeepReadonly2978<T>> {}

type DeepReadonlyObject2978<T> = {
  readonly [P in keyof T]: DeepReadonly2978<T[P]>;
};

type UnionToIntersection2978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2978<T> = UnionToIntersection2978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2978<T extends unknown[], V> = [...T, V];

type TuplifyUnion2978<T, L = LastOf2978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2978<TuplifyUnion2978<Exclude<T, L>>, L>;

type DeepPartial2978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2978<T[P]> }
  : T;

type Paths2978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2978<K, Paths2978<T[K], Prev2978[D]>> : never }[keyof T]
  : never;

type Prev2978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2978 {
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

type ConfigPaths2978 = Paths2978<NestedConfig2978>;

interface HeavyProps2978 {
  config: DeepPartial2978<NestedConfig2978>;
  path?: ConfigPaths2978;
}

const HeavyComponent2978 = memo(function HeavyComponent2978({ config }: HeavyProps2978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2978.displayName = 'HeavyComponent2978';
export default HeavyComponent2978;
