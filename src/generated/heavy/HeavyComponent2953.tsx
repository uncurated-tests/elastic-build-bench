'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2953<T> = T extends (infer U)[]
  ? DeepReadonlyArray2953<U>
  : T extends object
  ? DeepReadonlyObject2953<T>
  : T;

interface DeepReadonlyArray2953<T> extends ReadonlyArray<DeepReadonly2953<T>> {}

type DeepReadonlyObject2953<T> = {
  readonly [P in keyof T]: DeepReadonly2953<T[P]>;
};

type UnionToIntersection2953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2953<T> = UnionToIntersection2953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2953<T extends unknown[], V> = [...T, V];

type TuplifyUnion2953<T, L = LastOf2953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2953<TuplifyUnion2953<Exclude<T, L>>, L>;

type DeepPartial2953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2953<T[P]> }
  : T;

type Paths2953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2953<K, Paths2953<T[K], Prev2953[D]>> : never }[keyof T]
  : never;

type Prev2953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2953 {
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

type ConfigPaths2953 = Paths2953<NestedConfig2953>;

interface HeavyProps2953 {
  config: DeepPartial2953<NestedConfig2953>;
  path?: ConfigPaths2953;
}

const HeavyComponent2953 = memo(function HeavyComponent2953({ config }: HeavyProps2953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2953.displayName = 'HeavyComponent2953';
export default HeavyComponent2953;
