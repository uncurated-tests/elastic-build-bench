'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6296<T> = T extends (infer U)[]
  ? DeepReadonlyArray6296<U>
  : T extends object
  ? DeepReadonlyObject6296<T>
  : T;

interface DeepReadonlyArray6296<T> extends ReadonlyArray<DeepReadonly6296<T>> {}

type DeepReadonlyObject6296<T> = {
  readonly [P in keyof T]: DeepReadonly6296<T[P]>;
};

type UnionToIntersection6296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6296<T> = UnionToIntersection6296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6296<T extends unknown[], V> = [...T, V];

type TuplifyUnion6296<T, L = LastOf6296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6296<TuplifyUnion6296<Exclude<T, L>>, L>;

type DeepPartial6296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6296<T[P]> }
  : T;

type Paths6296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6296<K, Paths6296<T[K], Prev6296[D]>> : never }[keyof T]
  : never;

type Prev6296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6296 {
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

type ConfigPaths6296 = Paths6296<NestedConfig6296>;

interface HeavyProps6296 {
  config: DeepPartial6296<NestedConfig6296>;
  path?: ConfigPaths6296;
}

const HeavyComponent6296 = memo(function HeavyComponent6296({ config }: HeavyProps6296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6296.displayName = 'HeavyComponent6296';
export default HeavyComponent6296;
