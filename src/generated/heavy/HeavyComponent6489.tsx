'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6489<T> = T extends (infer U)[]
  ? DeepReadonlyArray6489<U>
  : T extends object
  ? DeepReadonlyObject6489<T>
  : T;

interface DeepReadonlyArray6489<T> extends ReadonlyArray<DeepReadonly6489<T>> {}

type DeepReadonlyObject6489<T> = {
  readonly [P in keyof T]: DeepReadonly6489<T[P]>;
};

type UnionToIntersection6489<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6489<T> = UnionToIntersection6489<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6489<T extends unknown[], V> = [...T, V];

type TuplifyUnion6489<T, L = LastOf6489<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6489<TuplifyUnion6489<Exclude<T, L>>, L>;

type DeepPartial6489<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6489<T[P]> }
  : T;

type Paths6489<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6489<K, Paths6489<T[K], Prev6489[D]>> : never }[keyof T]
  : never;

type Prev6489 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6489<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6489 {
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

type ConfigPaths6489 = Paths6489<NestedConfig6489>;

interface HeavyProps6489 {
  config: DeepPartial6489<NestedConfig6489>;
  path?: ConfigPaths6489;
}

const HeavyComponent6489 = memo(function HeavyComponent6489({ config }: HeavyProps6489) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6489) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6489 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6489: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6489.displayName = 'HeavyComponent6489';
export default HeavyComponent6489;
