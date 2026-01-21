'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6150<T> = T extends (infer U)[]
  ? DeepReadonlyArray6150<U>
  : T extends object
  ? DeepReadonlyObject6150<T>
  : T;

interface DeepReadonlyArray6150<T> extends ReadonlyArray<DeepReadonly6150<T>> {}

type DeepReadonlyObject6150<T> = {
  readonly [P in keyof T]: DeepReadonly6150<T[P]>;
};

type UnionToIntersection6150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6150<T> = UnionToIntersection6150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6150<T extends unknown[], V> = [...T, V];

type TuplifyUnion6150<T, L = LastOf6150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6150<TuplifyUnion6150<Exclude<T, L>>, L>;

type DeepPartial6150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6150<T[P]> }
  : T;

type Paths6150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6150<K, Paths6150<T[K], Prev6150[D]>> : never }[keyof T]
  : never;

type Prev6150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6150 {
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

type ConfigPaths6150 = Paths6150<NestedConfig6150>;

interface HeavyProps6150 {
  config: DeepPartial6150<NestedConfig6150>;
  path?: ConfigPaths6150;
}

const HeavyComponent6150 = memo(function HeavyComponent6150({ config }: HeavyProps6150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6150.displayName = 'HeavyComponent6150';
export default HeavyComponent6150;
