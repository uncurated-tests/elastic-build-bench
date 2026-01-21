'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7288<T> = T extends (infer U)[]
  ? DeepReadonlyArray7288<U>
  : T extends object
  ? DeepReadonlyObject7288<T>
  : T;

interface DeepReadonlyArray7288<T> extends ReadonlyArray<DeepReadonly7288<T>> {}

type DeepReadonlyObject7288<T> = {
  readonly [P in keyof T]: DeepReadonly7288<T[P]>;
};

type UnionToIntersection7288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7288<T> = UnionToIntersection7288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7288<T extends unknown[], V> = [...T, V];

type TuplifyUnion7288<T, L = LastOf7288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7288<TuplifyUnion7288<Exclude<T, L>>, L>;

type DeepPartial7288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7288<T[P]> }
  : T;

type Paths7288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7288<K, Paths7288<T[K], Prev7288[D]>> : never }[keyof T]
  : never;

type Prev7288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7288 {
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

type ConfigPaths7288 = Paths7288<NestedConfig7288>;

interface HeavyProps7288 {
  config: DeepPartial7288<NestedConfig7288>;
  path?: ConfigPaths7288;
}

const HeavyComponent7288 = memo(function HeavyComponent7288({ config }: HeavyProps7288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7288.displayName = 'HeavyComponent7288';
export default HeavyComponent7288;
