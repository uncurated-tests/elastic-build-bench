'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7423<T> = T extends (infer U)[]
  ? DeepReadonlyArray7423<U>
  : T extends object
  ? DeepReadonlyObject7423<T>
  : T;

interface DeepReadonlyArray7423<T> extends ReadonlyArray<DeepReadonly7423<T>> {}

type DeepReadonlyObject7423<T> = {
  readonly [P in keyof T]: DeepReadonly7423<T[P]>;
};

type UnionToIntersection7423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7423<T> = UnionToIntersection7423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7423<T extends unknown[], V> = [...T, V];

type TuplifyUnion7423<T, L = LastOf7423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7423<TuplifyUnion7423<Exclude<T, L>>, L>;

type DeepPartial7423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7423<T[P]> }
  : T;

type Paths7423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7423<K, Paths7423<T[K], Prev7423[D]>> : never }[keyof T]
  : never;

type Prev7423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7423 {
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

type ConfigPaths7423 = Paths7423<NestedConfig7423>;

interface HeavyProps7423 {
  config: DeepPartial7423<NestedConfig7423>;
  path?: ConfigPaths7423;
}

const HeavyComponent7423 = memo(function HeavyComponent7423({ config }: HeavyProps7423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7423.displayName = 'HeavyComponent7423';
export default HeavyComponent7423;
