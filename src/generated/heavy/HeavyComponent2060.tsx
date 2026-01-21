'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2060<T> = T extends (infer U)[]
  ? DeepReadonlyArray2060<U>
  : T extends object
  ? DeepReadonlyObject2060<T>
  : T;

interface DeepReadonlyArray2060<T> extends ReadonlyArray<DeepReadonly2060<T>> {}

type DeepReadonlyObject2060<T> = {
  readonly [P in keyof T]: DeepReadonly2060<T[P]>;
};

type UnionToIntersection2060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2060<T> = UnionToIntersection2060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2060<T extends unknown[], V> = [...T, V];

type TuplifyUnion2060<T, L = LastOf2060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2060<TuplifyUnion2060<Exclude<T, L>>, L>;

type DeepPartial2060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2060<T[P]> }
  : T;

type Paths2060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2060<K, Paths2060<T[K], Prev2060[D]>> : never }[keyof T]
  : never;

type Prev2060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2060 {
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

type ConfigPaths2060 = Paths2060<NestedConfig2060>;

interface HeavyProps2060 {
  config: DeepPartial2060<NestedConfig2060>;
  path?: ConfigPaths2060;
}

const HeavyComponent2060 = memo(function HeavyComponent2060({ config }: HeavyProps2060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2060.displayName = 'HeavyComponent2060';
export default HeavyComponent2060;
