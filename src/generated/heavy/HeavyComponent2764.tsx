'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2764<T> = T extends (infer U)[]
  ? DeepReadonlyArray2764<U>
  : T extends object
  ? DeepReadonlyObject2764<T>
  : T;

interface DeepReadonlyArray2764<T> extends ReadonlyArray<DeepReadonly2764<T>> {}

type DeepReadonlyObject2764<T> = {
  readonly [P in keyof T]: DeepReadonly2764<T[P]>;
};

type UnionToIntersection2764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2764<T> = UnionToIntersection2764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2764<T extends unknown[], V> = [...T, V];

type TuplifyUnion2764<T, L = LastOf2764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2764<TuplifyUnion2764<Exclude<T, L>>, L>;

type DeepPartial2764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2764<T[P]> }
  : T;

type Paths2764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2764<K, Paths2764<T[K], Prev2764[D]>> : never }[keyof T]
  : never;

type Prev2764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2764 {
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

type ConfigPaths2764 = Paths2764<NestedConfig2764>;

interface HeavyProps2764 {
  config: DeepPartial2764<NestedConfig2764>;
  path?: ConfigPaths2764;
}

const HeavyComponent2764 = memo(function HeavyComponent2764({ config }: HeavyProps2764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2764.displayName = 'HeavyComponent2764';
export default HeavyComponent2764;
