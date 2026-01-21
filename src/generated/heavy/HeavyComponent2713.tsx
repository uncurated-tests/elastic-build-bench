'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2713<T> = T extends (infer U)[]
  ? DeepReadonlyArray2713<U>
  : T extends object
  ? DeepReadonlyObject2713<T>
  : T;

interface DeepReadonlyArray2713<T> extends ReadonlyArray<DeepReadonly2713<T>> {}

type DeepReadonlyObject2713<T> = {
  readonly [P in keyof T]: DeepReadonly2713<T[P]>;
};

type UnionToIntersection2713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2713<T> = UnionToIntersection2713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2713<T extends unknown[], V> = [...T, V];

type TuplifyUnion2713<T, L = LastOf2713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2713<TuplifyUnion2713<Exclude<T, L>>, L>;

type DeepPartial2713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2713<T[P]> }
  : T;

type Paths2713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2713<K, Paths2713<T[K], Prev2713[D]>> : never }[keyof T]
  : never;

type Prev2713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2713 {
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

type ConfigPaths2713 = Paths2713<NestedConfig2713>;

interface HeavyProps2713 {
  config: DeepPartial2713<NestedConfig2713>;
  path?: ConfigPaths2713;
}

const HeavyComponent2713 = memo(function HeavyComponent2713({ config }: HeavyProps2713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2713.displayName = 'HeavyComponent2713';
export default HeavyComponent2713;
