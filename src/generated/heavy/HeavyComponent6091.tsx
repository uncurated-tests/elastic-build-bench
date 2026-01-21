'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6091<T> = T extends (infer U)[]
  ? DeepReadonlyArray6091<U>
  : T extends object
  ? DeepReadonlyObject6091<T>
  : T;

interface DeepReadonlyArray6091<T> extends ReadonlyArray<DeepReadonly6091<T>> {}

type DeepReadonlyObject6091<T> = {
  readonly [P in keyof T]: DeepReadonly6091<T[P]>;
};

type UnionToIntersection6091<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6091<T> = UnionToIntersection6091<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6091<T extends unknown[], V> = [...T, V];

type TuplifyUnion6091<T, L = LastOf6091<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6091<TuplifyUnion6091<Exclude<T, L>>, L>;

type DeepPartial6091<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6091<T[P]> }
  : T;

type Paths6091<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6091<K, Paths6091<T[K], Prev6091[D]>> : never }[keyof T]
  : never;

type Prev6091 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6091<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6091 {
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

type ConfigPaths6091 = Paths6091<NestedConfig6091>;

interface HeavyProps6091 {
  config: DeepPartial6091<NestedConfig6091>;
  path?: ConfigPaths6091;
}

const HeavyComponent6091 = memo(function HeavyComponent6091({ config }: HeavyProps6091) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6091) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6091 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6091: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6091.displayName = 'HeavyComponent6091';
export default HeavyComponent6091;
