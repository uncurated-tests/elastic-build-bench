'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6012<T> = T extends (infer U)[]
  ? DeepReadonlyArray6012<U>
  : T extends object
  ? DeepReadonlyObject6012<T>
  : T;

interface DeepReadonlyArray6012<T> extends ReadonlyArray<DeepReadonly6012<T>> {}

type DeepReadonlyObject6012<T> = {
  readonly [P in keyof T]: DeepReadonly6012<T[P]>;
};

type UnionToIntersection6012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6012<T> = UnionToIntersection6012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6012<T extends unknown[], V> = [...T, V];

type TuplifyUnion6012<T, L = LastOf6012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6012<TuplifyUnion6012<Exclude<T, L>>, L>;

type DeepPartial6012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6012<T[P]> }
  : T;

type Paths6012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6012<K, Paths6012<T[K], Prev6012[D]>> : never }[keyof T]
  : never;

type Prev6012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6012 {
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

type ConfigPaths6012 = Paths6012<NestedConfig6012>;

interface HeavyProps6012 {
  config: DeepPartial6012<NestedConfig6012>;
  path?: ConfigPaths6012;
}

const HeavyComponent6012 = memo(function HeavyComponent6012({ config }: HeavyProps6012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6012.displayName = 'HeavyComponent6012';
export default HeavyComponent6012;
