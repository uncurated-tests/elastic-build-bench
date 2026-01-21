'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2411<T> = T extends (infer U)[]
  ? DeepReadonlyArray2411<U>
  : T extends object
  ? DeepReadonlyObject2411<T>
  : T;

interface DeepReadonlyArray2411<T> extends ReadonlyArray<DeepReadonly2411<T>> {}

type DeepReadonlyObject2411<T> = {
  readonly [P in keyof T]: DeepReadonly2411<T[P]>;
};

type UnionToIntersection2411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2411<T> = UnionToIntersection2411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2411<T extends unknown[], V> = [...T, V];

type TuplifyUnion2411<T, L = LastOf2411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2411<TuplifyUnion2411<Exclude<T, L>>, L>;

type DeepPartial2411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2411<T[P]> }
  : T;

type Paths2411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2411<K, Paths2411<T[K], Prev2411[D]>> : never }[keyof T]
  : never;

type Prev2411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2411 {
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

type ConfigPaths2411 = Paths2411<NestedConfig2411>;

interface HeavyProps2411 {
  config: DeepPartial2411<NestedConfig2411>;
  path?: ConfigPaths2411;
}

const HeavyComponent2411 = memo(function HeavyComponent2411({ config }: HeavyProps2411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2411.displayName = 'HeavyComponent2411';
export default HeavyComponent2411;
