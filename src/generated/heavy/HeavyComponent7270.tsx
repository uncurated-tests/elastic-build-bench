'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7270<T> = T extends (infer U)[]
  ? DeepReadonlyArray7270<U>
  : T extends object
  ? DeepReadonlyObject7270<T>
  : T;

interface DeepReadonlyArray7270<T> extends ReadonlyArray<DeepReadonly7270<T>> {}

type DeepReadonlyObject7270<T> = {
  readonly [P in keyof T]: DeepReadonly7270<T[P]>;
};

type UnionToIntersection7270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7270<T> = UnionToIntersection7270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7270<T extends unknown[], V> = [...T, V];

type TuplifyUnion7270<T, L = LastOf7270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7270<TuplifyUnion7270<Exclude<T, L>>, L>;

type DeepPartial7270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7270<T[P]> }
  : T;

type Paths7270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7270<K, Paths7270<T[K], Prev7270[D]>> : never }[keyof T]
  : never;

type Prev7270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7270 {
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

type ConfigPaths7270 = Paths7270<NestedConfig7270>;

interface HeavyProps7270 {
  config: DeepPartial7270<NestedConfig7270>;
  path?: ConfigPaths7270;
}

const HeavyComponent7270 = memo(function HeavyComponent7270({ config }: HeavyProps7270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7270.displayName = 'HeavyComponent7270';
export default HeavyComponent7270;
