'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2504<T> = T extends (infer U)[]
  ? DeepReadonlyArray2504<U>
  : T extends object
  ? DeepReadonlyObject2504<T>
  : T;

interface DeepReadonlyArray2504<T> extends ReadonlyArray<DeepReadonly2504<T>> {}

type DeepReadonlyObject2504<T> = {
  readonly [P in keyof T]: DeepReadonly2504<T[P]>;
};

type UnionToIntersection2504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2504<T> = UnionToIntersection2504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2504<T extends unknown[], V> = [...T, V];

type TuplifyUnion2504<T, L = LastOf2504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2504<TuplifyUnion2504<Exclude<T, L>>, L>;

type DeepPartial2504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2504<T[P]> }
  : T;

type Paths2504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2504<K, Paths2504<T[K], Prev2504[D]>> : never }[keyof T]
  : never;

type Prev2504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2504 {
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

type ConfigPaths2504 = Paths2504<NestedConfig2504>;

interface HeavyProps2504 {
  config: DeepPartial2504<NestedConfig2504>;
  path?: ConfigPaths2504;
}

const HeavyComponent2504 = memo(function HeavyComponent2504({ config }: HeavyProps2504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2504.displayName = 'HeavyComponent2504';
export default HeavyComponent2504;
