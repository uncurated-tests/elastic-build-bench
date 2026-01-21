'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6223<T> = T extends (infer U)[]
  ? DeepReadonlyArray6223<U>
  : T extends object
  ? DeepReadonlyObject6223<T>
  : T;

interface DeepReadonlyArray6223<T> extends ReadonlyArray<DeepReadonly6223<T>> {}

type DeepReadonlyObject6223<T> = {
  readonly [P in keyof T]: DeepReadonly6223<T[P]>;
};

type UnionToIntersection6223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6223<T> = UnionToIntersection6223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6223<T extends unknown[], V> = [...T, V];

type TuplifyUnion6223<T, L = LastOf6223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6223<TuplifyUnion6223<Exclude<T, L>>, L>;

type DeepPartial6223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6223<T[P]> }
  : T;

type Paths6223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6223<K, Paths6223<T[K], Prev6223[D]>> : never }[keyof T]
  : never;

type Prev6223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6223 {
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

type ConfigPaths6223 = Paths6223<NestedConfig6223>;

interface HeavyProps6223 {
  config: DeepPartial6223<NestedConfig6223>;
  path?: ConfigPaths6223;
}

const HeavyComponent6223 = memo(function HeavyComponent6223({ config }: HeavyProps6223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6223.displayName = 'HeavyComponent6223';
export default HeavyComponent6223;
