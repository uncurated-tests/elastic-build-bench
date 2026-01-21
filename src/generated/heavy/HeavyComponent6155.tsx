'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6155<T> = T extends (infer U)[]
  ? DeepReadonlyArray6155<U>
  : T extends object
  ? DeepReadonlyObject6155<T>
  : T;

interface DeepReadonlyArray6155<T> extends ReadonlyArray<DeepReadonly6155<T>> {}

type DeepReadonlyObject6155<T> = {
  readonly [P in keyof T]: DeepReadonly6155<T[P]>;
};

type UnionToIntersection6155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6155<T> = UnionToIntersection6155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6155<T extends unknown[], V> = [...T, V];

type TuplifyUnion6155<T, L = LastOf6155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6155<TuplifyUnion6155<Exclude<T, L>>, L>;

type DeepPartial6155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6155<T[P]> }
  : T;

type Paths6155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6155<K, Paths6155<T[K], Prev6155[D]>> : never }[keyof T]
  : never;

type Prev6155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6155 {
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

type ConfigPaths6155 = Paths6155<NestedConfig6155>;

interface HeavyProps6155 {
  config: DeepPartial6155<NestedConfig6155>;
  path?: ConfigPaths6155;
}

const HeavyComponent6155 = memo(function HeavyComponent6155({ config }: HeavyProps6155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6155.displayName = 'HeavyComponent6155';
export default HeavyComponent6155;
