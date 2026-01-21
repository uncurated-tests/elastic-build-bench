'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4360<T> = T extends (infer U)[]
  ? DeepReadonlyArray4360<U>
  : T extends object
  ? DeepReadonlyObject4360<T>
  : T;

interface DeepReadonlyArray4360<T> extends ReadonlyArray<DeepReadonly4360<T>> {}

type DeepReadonlyObject4360<T> = {
  readonly [P in keyof T]: DeepReadonly4360<T[P]>;
};

type UnionToIntersection4360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4360<T> = UnionToIntersection4360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4360<T extends unknown[], V> = [...T, V];

type TuplifyUnion4360<T, L = LastOf4360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4360<TuplifyUnion4360<Exclude<T, L>>, L>;

type DeepPartial4360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4360<T[P]> }
  : T;

type Paths4360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4360<K, Paths4360<T[K], Prev4360[D]>> : never }[keyof T]
  : never;

type Prev4360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4360 {
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

type ConfigPaths4360 = Paths4360<NestedConfig4360>;

interface HeavyProps4360 {
  config: DeepPartial4360<NestedConfig4360>;
  path?: ConfigPaths4360;
}

const HeavyComponent4360 = memo(function HeavyComponent4360({ config }: HeavyProps4360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4360.displayName = 'HeavyComponent4360';
export default HeavyComponent4360;
