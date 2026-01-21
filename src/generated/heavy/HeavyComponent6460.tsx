'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6460<T> = T extends (infer U)[]
  ? DeepReadonlyArray6460<U>
  : T extends object
  ? DeepReadonlyObject6460<T>
  : T;

interface DeepReadonlyArray6460<T> extends ReadonlyArray<DeepReadonly6460<T>> {}

type DeepReadonlyObject6460<T> = {
  readonly [P in keyof T]: DeepReadonly6460<T[P]>;
};

type UnionToIntersection6460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6460<T> = UnionToIntersection6460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6460<T extends unknown[], V> = [...T, V];

type TuplifyUnion6460<T, L = LastOf6460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6460<TuplifyUnion6460<Exclude<T, L>>, L>;

type DeepPartial6460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6460<T[P]> }
  : T;

type Paths6460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6460<K, Paths6460<T[K], Prev6460[D]>> : never }[keyof T]
  : never;

type Prev6460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6460 {
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

type ConfigPaths6460 = Paths6460<NestedConfig6460>;

interface HeavyProps6460 {
  config: DeepPartial6460<NestedConfig6460>;
  path?: ConfigPaths6460;
}

const HeavyComponent6460 = memo(function HeavyComponent6460({ config }: HeavyProps6460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6460.displayName = 'HeavyComponent6460';
export default HeavyComponent6460;
