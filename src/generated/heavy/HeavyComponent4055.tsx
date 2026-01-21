'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4055<T> = T extends (infer U)[]
  ? DeepReadonlyArray4055<U>
  : T extends object
  ? DeepReadonlyObject4055<T>
  : T;

interface DeepReadonlyArray4055<T> extends ReadonlyArray<DeepReadonly4055<T>> {}

type DeepReadonlyObject4055<T> = {
  readonly [P in keyof T]: DeepReadonly4055<T[P]>;
};

type UnionToIntersection4055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4055<T> = UnionToIntersection4055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4055<T extends unknown[], V> = [...T, V];

type TuplifyUnion4055<T, L = LastOf4055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4055<TuplifyUnion4055<Exclude<T, L>>, L>;

type DeepPartial4055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4055<T[P]> }
  : T;

type Paths4055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4055<K, Paths4055<T[K], Prev4055[D]>> : never }[keyof T]
  : never;

type Prev4055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4055 {
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

type ConfigPaths4055 = Paths4055<NestedConfig4055>;

interface HeavyProps4055 {
  config: DeepPartial4055<NestedConfig4055>;
  path?: ConfigPaths4055;
}

const HeavyComponent4055 = memo(function HeavyComponent4055({ config }: HeavyProps4055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4055.displayName = 'HeavyComponent4055';
export default HeavyComponent4055;
