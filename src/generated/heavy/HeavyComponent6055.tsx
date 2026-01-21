'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6055<T> = T extends (infer U)[]
  ? DeepReadonlyArray6055<U>
  : T extends object
  ? DeepReadonlyObject6055<T>
  : T;

interface DeepReadonlyArray6055<T> extends ReadonlyArray<DeepReadonly6055<T>> {}

type DeepReadonlyObject6055<T> = {
  readonly [P in keyof T]: DeepReadonly6055<T[P]>;
};

type UnionToIntersection6055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6055<T> = UnionToIntersection6055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6055<T extends unknown[], V> = [...T, V];

type TuplifyUnion6055<T, L = LastOf6055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6055<TuplifyUnion6055<Exclude<T, L>>, L>;

type DeepPartial6055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6055<T[P]> }
  : T;

type Paths6055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6055<K, Paths6055<T[K], Prev6055[D]>> : never }[keyof T]
  : never;

type Prev6055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6055 {
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

type ConfigPaths6055 = Paths6055<NestedConfig6055>;

interface HeavyProps6055 {
  config: DeepPartial6055<NestedConfig6055>;
  path?: ConfigPaths6055;
}

const HeavyComponent6055 = memo(function HeavyComponent6055({ config }: HeavyProps6055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6055.displayName = 'HeavyComponent6055';
export default HeavyComponent6055;
