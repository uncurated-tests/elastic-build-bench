'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6625<T> = T extends (infer U)[]
  ? DeepReadonlyArray6625<U>
  : T extends object
  ? DeepReadonlyObject6625<T>
  : T;

interface DeepReadonlyArray6625<T> extends ReadonlyArray<DeepReadonly6625<T>> {}

type DeepReadonlyObject6625<T> = {
  readonly [P in keyof T]: DeepReadonly6625<T[P]>;
};

type UnionToIntersection6625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6625<T> = UnionToIntersection6625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6625<T extends unknown[], V> = [...T, V];

type TuplifyUnion6625<T, L = LastOf6625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6625<TuplifyUnion6625<Exclude<T, L>>, L>;

type DeepPartial6625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6625<T[P]> }
  : T;

type Paths6625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6625<K, Paths6625<T[K], Prev6625[D]>> : never }[keyof T]
  : never;

type Prev6625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6625 {
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

type ConfigPaths6625 = Paths6625<NestedConfig6625>;

interface HeavyProps6625 {
  config: DeepPartial6625<NestedConfig6625>;
  path?: ConfigPaths6625;
}

const HeavyComponent6625 = memo(function HeavyComponent6625({ config }: HeavyProps6625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6625.displayName = 'HeavyComponent6625';
export default HeavyComponent6625;
