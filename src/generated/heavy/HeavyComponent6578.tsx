'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6578<T> = T extends (infer U)[]
  ? DeepReadonlyArray6578<U>
  : T extends object
  ? DeepReadonlyObject6578<T>
  : T;

interface DeepReadonlyArray6578<T> extends ReadonlyArray<DeepReadonly6578<T>> {}

type DeepReadonlyObject6578<T> = {
  readonly [P in keyof T]: DeepReadonly6578<T[P]>;
};

type UnionToIntersection6578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6578<T> = UnionToIntersection6578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6578<T extends unknown[], V> = [...T, V];

type TuplifyUnion6578<T, L = LastOf6578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6578<TuplifyUnion6578<Exclude<T, L>>, L>;

type DeepPartial6578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6578<T[P]> }
  : T;

type Paths6578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6578<K, Paths6578<T[K], Prev6578[D]>> : never }[keyof T]
  : never;

type Prev6578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6578 {
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

type ConfigPaths6578 = Paths6578<NestedConfig6578>;

interface HeavyProps6578 {
  config: DeepPartial6578<NestedConfig6578>;
  path?: ConfigPaths6578;
}

const HeavyComponent6578 = memo(function HeavyComponent6578({ config }: HeavyProps6578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6578.displayName = 'HeavyComponent6578';
export default HeavyComponent6578;
