'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6606<T> = T extends (infer U)[]
  ? DeepReadonlyArray6606<U>
  : T extends object
  ? DeepReadonlyObject6606<T>
  : T;

interface DeepReadonlyArray6606<T> extends ReadonlyArray<DeepReadonly6606<T>> {}

type DeepReadonlyObject6606<T> = {
  readonly [P in keyof T]: DeepReadonly6606<T[P]>;
};

type UnionToIntersection6606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6606<T> = UnionToIntersection6606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6606<T extends unknown[], V> = [...T, V];

type TuplifyUnion6606<T, L = LastOf6606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6606<TuplifyUnion6606<Exclude<T, L>>, L>;

type DeepPartial6606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6606<T[P]> }
  : T;

type Paths6606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6606<K, Paths6606<T[K], Prev6606[D]>> : never }[keyof T]
  : never;

type Prev6606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6606 {
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

type ConfigPaths6606 = Paths6606<NestedConfig6606>;

interface HeavyProps6606 {
  config: DeepPartial6606<NestedConfig6606>;
  path?: ConfigPaths6606;
}

const HeavyComponent6606 = memo(function HeavyComponent6606({ config }: HeavyProps6606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6606.displayName = 'HeavyComponent6606';
export default HeavyComponent6606;
