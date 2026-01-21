'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6081<T> = T extends (infer U)[]
  ? DeepReadonlyArray6081<U>
  : T extends object
  ? DeepReadonlyObject6081<T>
  : T;

interface DeepReadonlyArray6081<T> extends ReadonlyArray<DeepReadonly6081<T>> {}

type DeepReadonlyObject6081<T> = {
  readonly [P in keyof T]: DeepReadonly6081<T[P]>;
};

type UnionToIntersection6081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6081<T> = UnionToIntersection6081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6081<T extends unknown[], V> = [...T, V];

type TuplifyUnion6081<T, L = LastOf6081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6081<TuplifyUnion6081<Exclude<T, L>>, L>;

type DeepPartial6081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6081<T[P]> }
  : T;

type Paths6081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6081<K, Paths6081<T[K], Prev6081[D]>> : never }[keyof T]
  : never;

type Prev6081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6081 {
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

type ConfigPaths6081 = Paths6081<NestedConfig6081>;

interface HeavyProps6081 {
  config: DeepPartial6081<NestedConfig6081>;
  path?: ConfigPaths6081;
}

const HeavyComponent6081 = memo(function HeavyComponent6081({ config }: HeavyProps6081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6081.displayName = 'HeavyComponent6081';
export default HeavyComponent6081;
