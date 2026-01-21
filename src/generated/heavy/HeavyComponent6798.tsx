'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6798<T> = T extends (infer U)[]
  ? DeepReadonlyArray6798<U>
  : T extends object
  ? DeepReadonlyObject6798<T>
  : T;

interface DeepReadonlyArray6798<T> extends ReadonlyArray<DeepReadonly6798<T>> {}

type DeepReadonlyObject6798<T> = {
  readonly [P in keyof T]: DeepReadonly6798<T[P]>;
};

type UnionToIntersection6798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6798<T> = UnionToIntersection6798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6798<T extends unknown[], V> = [...T, V];

type TuplifyUnion6798<T, L = LastOf6798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6798<TuplifyUnion6798<Exclude<T, L>>, L>;

type DeepPartial6798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6798<T[P]> }
  : T;

type Paths6798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6798<K, Paths6798<T[K], Prev6798[D]>> : never }[keyof T]
  : never;

type Prev6798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6798 {
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

type ConfigPaths6798 = Paths6798<NestedConfig6798>;

interface HeavyProps6798 {
  config: DeepPartial6798<NestedConfig6798>;
  path?: ConfigPaths6798;
}

const HeavyComponent6798 = memo(function HeavyComponent6798({ config }: HeavyProps6798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6798.displayName = 'HeavyComponent6798';
export default HeavyComponent6798;
