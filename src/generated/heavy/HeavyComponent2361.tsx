'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2361<T> = T extends (infer U)[]
  ? DeepReadonlyArray2361<U>
  : T extends object
  ? DeepReadonlyObject2361<T>
  : T;

interface DeepReadonlyArray2361<T> extends ReadonlyArray<DeepReadonly2361<T>> {}

type DeepReadonlyObject2361<T> = {
  readonly [P in keyof T]: DeepReadonly2361<T[P]>;
};

type UnionToIntersection2361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2361<T> = UnionToIntersection2361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2361<T extends unknown[], V> = [...T, V];

type TuplifyUnion2361<T, L = LastOf2361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2361<TuplifyUnion2361<Exclude<T, L>>, L>;

type DeepPartial2361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2361<T[P]> }
  : T;

type Paths2361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2361<K, Paths2361<T[K], Prev2361[D]>> : never }[keyof T]
  : never;

type Prev2361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2361 {
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

type ConfigPaths2361 = Paths2361<NestedConfig2361>;

interface HeavyProps2361 {
  config: DeepPartial2361<NestedConfig2361>;
  path?: ConfigPaths2361;
}

const HeavyComponent2361 = memo(function HeavyComponent2361({ config }: HeavyProps2361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2361.displayName = 'HeavyComponent2361';
export default HeavyComponent2361;
