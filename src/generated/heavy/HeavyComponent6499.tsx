'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6499<T> = T extends (infer U)[]
  ? DeepReadonlyArray6499<U>
  : T extends object
  ? DeepReadonlyObject6499<T>
  : T;

interface DeepReadonlyArray6499<T> extends ReadonlyArray<DeepReadonly6499<T>> {}

type DeepReadonlyObject6499<T> = {
  readonly [P in keyof T]: DeepReadonly6499<T[P]>;
};

type UnionToIntersection6499<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6499<T> = UnionToIntersection6499<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6499<T extends unknown[], V> = [...T, V];

type TuplifyUnion6499<T, L = LastOf6499<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6499<TuplifyUnion6499<Exclude<T, L>>, L>;

type DeepPartial6499<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6499<T[P]> }
  : T;

type Paths6499<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6499<K, Paths6499<T[K], Prev6499[D]>> : never }[keyof T]
  : never;

type Prev6499 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6499<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6499 {
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

type ConfigPaths6499 = Paths6499<NestedConfig6499>;

interface HeavyProps6499 {
  config: DeepPartial6499<NestedConfig6499>;
  path?: ConfigPaths6499;
}

const HeavyComponent6499 = memo(function HeavyComponent6499({ config }: HeavyProps6499) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6499) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6499 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6499: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6499.displayName = 'HeavyComponent6499';
export default HeavyComponent6499;
