'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6510<T> = T extends (infer U)[]
  ? DeepReadonlyArray6510<U>
  : T extends object
  ? DeepReadonlyObject6510<T>
  : T;

interface DeepReadonlyArray6510<T> extends ReadonlyArray<DeepReadonly6510<T>> {}

type DeepReadonlyObject6510<T> = {
  readonly [P in keyof T]: DeepReadonly6510<T[P]>;
};

type UnionToIntersection6510<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6510<T> = UnionToIntersection6510<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6510<T extends unknown[], V> = [...T, V];

type TuplifyUnion6510<T, L = LastOf6510<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6510<TuplifyUnion6510<Exclude<T, L>>, L>;

type DeepPartial6510<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6510<T[P]> }
  : T;

type Paths6510<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6510<K, Paths6510<T[K], Prev6510[D]>> : never }[keyof T]
  : never;

type Prev6510 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6510<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6510 {
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

type ConfigPaths6510 = Paths6510<NestedConfig6510>;

interface HeavyProps6510 {
  config: DeepPartial6510<NestedConfig6510>;
  path?: ConfigPaths6510;
}

const HeavyComponent6510 = memo(function HeavyComponent6510({ config }: HeavyProps6510) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6510) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6510 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6510: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6510.displayName = 'HeavyComponent6510';
export default HeavyComponent6510;
