'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6490<T> = T extends (infer U)[]
  ? DeepReadonlyArray6490<U>
  : T extends object
  ? DeepReadonlyObject6490<T>
  : T;

interface DeepReadonlyArray6490<T> extends ReadonlyArray<DeepReadonly6490<T>> {}

type DeepReadonlyObject6490<T> = {
  readonly [P in keyof T]: DeepReadonly6490<T[P]>;
};

type UnionToIntersection6490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6490<T> = UnionToIntersection6490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6490<T extends unknown[], V> = [...T, V];

type TuplifyUnion6490<T, L = LastOf6490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6490<TuplifyUnion6490<Exclude<T, L>>, L>;

type DeepPartial6490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6490<T[P]> }
  : T;

type Paths6490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6490<K, Paths6490<T[K], Prev6490[D]>> : never }[keyof T]
  : never;

type Prev6490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6490 {
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

type ConfigPaths6490 = Paths6490<NestedConfig6490>;

interface HeavyProps6490 {
  config: DeepPartial6490<NestedConfig6490>;
  path?: ConfigPaths6490;
}

const HeavyComponent6490 = memo(function HeavyComponent6490({ config }: HeavyProps6490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6490.displayName = 'HeavyComponent6490';
export default HeavyComponent6490;
