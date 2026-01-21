'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2262<T> = T extends (infer U)[]
  ? DeepReadonlyArray2262<U>
  : T extends object
  ? DeepReadonlyObject2262<T>
  : T;

interface DeepReadonlyArray2262<T> extends ReadonlyArray<DeepReadonly2262<T>> {}

type DeepReadonlyObject2262<T> = {
  readonly [P in keyof T]: DeepReadonly2262<T[P]>;
};

type UnionToIntersection2262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2262<T> = UnionToIntersection2262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2262<T extends unknown[], V> = [...T, V];

type TuplifyUnion2262<T, L = LastOf2262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2262<TuplifyUnion2262<Exclude<T, L>>, L>;

type DeepPartial2262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2262<T[P]> }
  : T;

type Paths2262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2262<K, Paths2262<T[K], Prev2262[D]>> : never }[keyof T]
  : never;

type Prev2262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2262 {
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

type ConfigPaths2262 = Paths2262<NestedConfig2262>;

interface HeavyProps2262 {
  config: DeepPartial2262<NestedConfig2262>;
  path?: ConfigPaths2262;
}

const HeavyComponent2262 = memo(function HeavyComponent2262({ config }: HeavyProps2262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2262.displayName = 'HeavyComponent2262';
export default HeavyComponent2262;
