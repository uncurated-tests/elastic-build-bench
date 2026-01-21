'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2423<T> = T extends (infer U)[]
  ? DeepReadonlyArray2423<U>
  : T extends object
  ? DeepReadonlyObject2423<T>
  : T;

interface DeepReadonlyArray2423<T> extends ReadonlyArray<DeepReadonly2423<T>> {}

type DeepReadonlyObject2423<T> = {
  readonly [P in keyof T]: DeepReadonly2423<T[P]>;
};

type UnionToIntersection2423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2423<T> = UnionToIntersection2423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2423<T extends unknown[], V> = [...T, V];

type TuplifyUnion2423<T, L = LastOf2423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2423<TuplifyUnion2423<Exclude<T, L>>, L>;

type DeepPartial2423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2423<T[P]> }
  : T;

type Paths2423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2423<K, Paths2423<T[K], Prev2423[D]>> : never }[keyof T]
  : never;

type Prev2423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2423 {
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

type ConfigPaths2423 = Paths2423<NestedConfig2423>;

interface HeavyProps2423 {
  config: DeepPartial2423<NestedConfig2423>;
  path?: ConfigPaths2423;
}

const HeavyComponent2423 = memo(function HeavyComponent2423({ config }: HeavyProps2423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2423.displayName = 'HeavyComponent2423';
export default HeavyComponent2423;
