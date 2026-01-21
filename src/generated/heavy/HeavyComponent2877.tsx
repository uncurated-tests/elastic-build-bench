'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2877<T> = T extends (infer U)[]
  ? DeepReadonlyArray2877<U>
  : T extends object
  ? DeepReadonlyObject2877<T>
  : T;

interface DeepReadonlyArray2877<T> extends ReadonlyArray<DeepReadonly2877<T>> {}

type DeepReadonlyObject2877<T> = {
  readonly [P in keyof T]: DeepReadonly2877<T[P]>;
};

type UnionToIntersection2877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2877<T> = UnionToIntersection2877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2877<T extends unknown[], V> = [...T, V];

type TuplifyUnion2877<T, L = LastOf2877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2877<TuplifyUnion2877<Exclude<T, L>>, L>;

type DeepPartial2877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2877<T[P]> }
  : T;

type Paths2877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2877<K, Paths2877<T[K], Prev2877[D]>> : never }[keyof T]
  : never;

type Prev2877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2877 {
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

type ConfigPaths2877 = Paths2877<NestedConfig2877>;

interface HeavyProps2877 {
  config: DeepPartial2877<NestedConfig2877>;
  path?: ConfigPaths2877;
}

const HeavyComponent2877 = memo(function HeavyComponent2877({ config }: HeavyProps2877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2877.displayName = 'HeavyComponent2877';
export default HeavyComponent2877;
