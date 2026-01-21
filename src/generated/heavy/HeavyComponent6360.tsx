'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6360<T> = T extends (infer U)[]
  ? DeepReadonlyArray6360<U>
  : T extends object
  ? DeepReadonlyObject6360<T>
  : T;

interface DeepReadonlyArray6360<T> extends ReadonlyArray<DeepReadonly6360<T>> {}

type DeepReadonlyObject6360<T> = {
  readonly [P in keyof T]: DeepReadonly6360<T[P]>;
};

type UnionToIntersection6360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6360<T> = UnionToIntersection6360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6360<T extends unknown[], V> = [...T, V];

type TuplifyUnion6360<T, L = LastOf6360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6360<TuplifyUnion6360<Exclude<T, L>>, L>;

type DeepPartial6360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6360<T[P]> }
  : T;

type Paths6360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6360<K, Paths6360<T[K], Prev6360[D]>> : never }[keyof T]
  : never;

type Prev6360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6360 {
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

type ConfigPaths6360 = Paths6360<NestedConfig6360>;

interface HeavyProps6360 {
  config: DeepPartial6360<NestedConfig6360>;
  path?: ConfigPaths6360;
}

const HeavyComponent6360 = memo(function HeavyComponent6360({ config }: HeavyProps6360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6360.displayName = 'HeavyComponent6360';
export default HeavyComponent6360;
