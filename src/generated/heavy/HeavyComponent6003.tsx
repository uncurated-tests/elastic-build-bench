'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6003<T> = T extends (infer U)[]
  ? DeepReadonlyArray6003<U>
  : T extends object
  ? DeepReadonlyObject6003<T>
  : T;

interface DeepReadonlyArray6003<T> extends ReadonlyArray<DeepReadonly6003<T>> {}

type DeepReadonlyObject6003<T> = {
  readonly [P in keyof T]: DeepReadonly6003<T[P]>;
};

type UnionToIntersection6003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6003<T> = UnionToIntersection6003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6003<T extends unknown[], V> = [...T, V];

type TuplifyUnion6003<T, L = LastOf6003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6003<TuplifyUnion6003<Exclude<T, L>>, L>;

type DeepPartial6003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6003<T[P]> }
  : T;

type Paths6003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6003<K, Paths6003<T[K], Prev6003[D]>> : never }[keyof T]
  : never;

type Prev6003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6003 {
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

type ConfigPaths6003 = Paths6003<NestedConfig6003>;

interface HeavyProps6003 {
  config: DeepPartial6003<NestedConfig6003>;
  path?: ConfigPaths6003;
}

const HeavyComponent6003 = memo(function HeavyComponent6003({ config }: HeavyProps6003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6003.displayName = 'HeavyComponent6003';
export default HeavyComponent6003;
