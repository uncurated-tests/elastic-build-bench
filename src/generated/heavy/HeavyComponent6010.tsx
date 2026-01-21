'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6010<T> = T extends (infer U)[]
  ? DeepReadonlyArray6010<U>
  : T extends object
  ? DeepReadonlyObject6010<T>
  : T;

interface DeepReadonlyArray6010<T> extends ReadonlyArray<DeepReadonly6010<T>> {}

type DeepReadonlyObject6010<T> = {
  readonly [P in keyof T]: DeepReadonly6010<T[P]>;
};

type UnionToIntersection6010<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6010<T> = UnionToIntersection6010<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6010<T extends unknown[], V> = [...T, V];

type TuplifyUnion6010<T, L = LastOf6010<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6010<TuplifyUnion6010<Exclude<T, L>>, L>;

type DeepPartial6010<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6010<T[P]> }
  : T;

type Paths6010<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6010<K, Paths6010<T[K], Prev6010[D]>> : never }[keyof T]
  : never;

type Prev6010 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6010<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6010 {
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

type ConfigPaths6010 = Paths6010<NestedConfig6010>;

interface HeavyProps6010 {
  config: DeepPartial6010<NestedConfig6010>;
  path?: ConfigPaths6010;
}

const HeavyComponent6010 = memo(function HeavyComponent6010({ config }: HeavyProps6010) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6010) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6010 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6010: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6010.displayName = 'HeavyComponent6010';
export default HeavyComponent6010;
