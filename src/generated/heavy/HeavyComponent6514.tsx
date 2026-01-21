'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6514<T> = T extends (infer U)[]
  ? DeepReadonlyArray6514<U>
  : T extends object
  ? DeepReadonlyObject6514<T>
  : T;

interface DeepReadonlyArray6514<T> extends ReadonlyArray<DeepReadonly6514<T>> {}

type DeepReadonlyObject6514<T> = {
  readonly [P in keyof T]: DeepReadonly6514<T[P]>;
};

type UnionToIntersection6514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6514<T> = UnionToIntersection6514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6514<T extends unknown[], V> = [...T, V];

type TuplifyUnion6514<T, L = LastOf6514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6514<TuplifyUnion6514<Exclude<T, L>>, L>;

type DeepPartial6514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6514<T[P]> }
  : T;

type Paths6514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6514<K, Paths6514<T[K], Prev6514[D]>> : never }[keyof T]
  : never;

type Prev6514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6514 {
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

type ConfigPaths6514 = Paths6514<NestedConfig6514>;

interface HeavyProps6514 {
  config: DeepPartial6514<NestedConfig6514>;
  path?: ConfigPaths6514;
}

const HeavyComponent6514 = memo(function HeavyComponent6514({ config }: HeavyProps6514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6514.displayName = 'HeavyComponent6514';
export default HeavyComponent6514;
