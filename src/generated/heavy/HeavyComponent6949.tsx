'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6949<T> = T extends (infer U)[]
  ? DeepReadonlyArray6949<U>
  : T extends object
  ? DeepReadonlyObject6949<T>
  : T;

interface DeepReadonlyArray6949<T> extends ReadonlyArray<DeepReadonly6949<T>> {}

type DeepReadonlyObject6949<T> = {
  readonly [P in keyof T]: DeepReadonly6949<T[P]>;
};

type UnionToIntersection6949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6949<T> = UnionToIntersection6949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6949<T extends unknown[], V> = [...T, V];

type TuplifyUnion6949<T, L = LastOf6949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6949<TuplifyUnion6949<Exclude<T, L>>, L>;

type DeepPartial6949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6949<T[P]> }
  : T;

type Paths6949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6949<K, Paths6949<T[K], Prev6949[D]>> : never }[keyof T]
  : never;

type Prev6949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6949 {
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

type ConfigPaths6949 = Paths6949<NestedConfig6949>;

interface HeavyProps6949 {
  config: DeepPartial6949<NestedConfig6949>;
  path?: ConfigPaths6949;
}

const HeavyComponent6949 = memo(function HeavyComponent6949({ config }: HeavyProps6949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6949.displayName = 'HeavyComponent6949';
export default HeavyComponent6949;
