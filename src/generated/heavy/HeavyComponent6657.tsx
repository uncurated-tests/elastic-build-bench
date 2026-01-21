'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6657<T> = T extends (infer U)[]
  ? DeepReadonlyArray6657<U>
  : T extends object
  ? DeepReadonlyObject6657<T>
  : T;

interface DeepReadonlyArray6657<T> extends ReadonlyArray<DeepReadonly6657<T>> {}

type DeepReadonlyObject6657<T> = {
  readonly [P in keyof T]: DeepReadonly6657<T[P]>;
};

type UnionToIntersection6657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6657<T> = UnionToIntersection6657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6657<T extends unknown[], V> = [...T, V];

type TuplifyUnion6657<T, L = LastOf6657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6657<TuplifyUnion6657<Exclude<T, L>>, L>;

type DeepPartial6657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6657<T[P]> }
  : T;

type Paths6657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6657<K, Paths6657<T[K], Prev6657[D]>> : never }[keyof T]
  : never;

type Prev6657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6657 {
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

type ConfigPaths6657 = Paths6657<NestedConfig6657>;

interface HeavyProps6657 {
  config: DeepPartial6657<NestedConfig6657>;
  path?: ConfigPaths6657;
}

const HeavyComponent6657 = memo(function HeavyComponent6657({ config }: HeavyProps6657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6657.displayName = 'HeavyComponent6657';
export default HeavyComponent6657;
