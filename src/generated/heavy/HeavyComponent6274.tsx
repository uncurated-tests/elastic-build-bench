'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6274<T> = T extends (infer U)[]
  ? DeepReadonlyArray6274<U>
  : T extends object
  ? DeepReadonlyObject6274<T>
  : T;

interface DeepReadonlyArray6274<T> extends ReadonlyArray<DeepReadonly6274<T>> {}

type DeepReadonlyObject6274<T> = {
  readonly [P in keyof T]: DeepReadonly6274<T[P]>;
};

type UnionToIntersection6274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6274<T> = UnionToIntersection6274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6274<T extends unknown[], V> = [...T, V];

type TuplifyUnion6274<T, L = LastOf6274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6274<TuplifyUnion6274<Exclude<T, L>>, L>;

type DeepPartial6274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6274<T[P]> }
  : T;

type Paths6274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6274<K, Paths6274<T[K], Prev6274[D]>> : never }[keyof T]
  : never;

type Prev6274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6274 {
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

type ConfigPaths6274 = Paths6274<NestedConfig6274>;

interface HeavyProps6274 {
  config: DeepPartial6274<NestedConfig6274>;
  path?: ConfigPaths6274;
}

const HeavyComponent6274 = memo(function HeavyComponent6274({ config }: HeavyProps6274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6274.displayName = 'HeavyComponent6274';
export default HeavyComponent6274;
