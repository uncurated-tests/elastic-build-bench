'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7525<T> = T extends (infer U)[]
  ? DeepReadonlyArray7525<U>
  : T extends object
  ? DeepReadonlyObject7525<T>
  : T;

interface DeepReadonlyArray7525<T> extends ReadonlyArray<DeepReadonly7525<T>> {}

type DeepReadonlyObject7525<T> = {
  readonly [P in keyof T]: DeepReadonly7525<T[P]>;
};

type UnionToIntersection7525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7525<T> = UnionToIntersection7525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7525<T extends unknown[], V> = [...T, V];

type TuplifyUnion7525<T, L = LastOf7525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7525<TuplifyUnion7525<Exclude<T, L>>, L>;

type DeepPartial7525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7525<T[P]> }
  : T;

type Paths7525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7525<K, Paths7525<T[K], Prev7525[D]>> : never }[keyof T]
  : never;

type Prev7525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7525 {
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

type ConfigPaths7525 = Paths7525<NestedConfig7525>;

interface HeavyProps7525 {
  config: DeepPartial7525<NestedConfig7525>;
  path?: ConfigPaths7525;
}

const HeavyComponent7525 = memo(function HeavyComponent7525({ config }: HeavyProps7525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7525.displayName = 'HeavyComponent7525';
export default HeavyComponent7525;
