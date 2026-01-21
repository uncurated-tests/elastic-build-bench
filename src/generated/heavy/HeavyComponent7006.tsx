'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7006<T> = T extends (infer U)[]
  ? DeepReadonlyArray7006<U>
  : T extends object
  ? DeepReadonlyObject7006<T>
  : T;

interface DeepReadonlyArray7006<T> extends ReadonlyArray<DeepReadonly7006<T>> {}

type DeepReadonlyObject7006<T> = {
  readonly [P in keyof T]: DeepReadonly7006<T[P]>;
};

type UnionToIntersection7006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7006<T> = UnionToIntersection7006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7006<T extends unknown[], V> = [...T, V];

type TuplifyUnion7006<T, L = LastOf7006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7006<TuplifyUnion7006<Exclude<T, L>>, L>;

type DeepPartial7006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7006<T[P]> }
  : T;

type Paths7006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7006<K, Paths7006<T[K], Prev7006[D]>> : never }[keyof T]
  : never;

type Prev7006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7006 {
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

type ConfigPaths7006 = Paths7006<NestedConfig7006>;

interface HeavyProps7006 {
  config: DeepPartial7006<NestedConfig7006>;
  path?: ConfigPaths7006;
}

const HeavyComponent7006 = memo(function HeavyComponent7006({ config }: HeavyProps7006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7006.displayName = 'HeavyComponent7006';
export default HeavyComponent7006;
