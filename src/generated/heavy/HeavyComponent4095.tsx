'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4095<T> = T extends (infer U)[]
  ? DeepReadonlyArray4095<U>
  : T extends object
  ? DeepReadonlyObject4095<T>
  : T;

interface DeepReadonlyArray4095<T> extends ReadonlyArray<DeepReadonly4095<T>> {}

type DeepReadonlyObject4095<T> = {
  readonly [P in keyof T]: DeepReadonly4095<T[P]>;
};

type UnionToIntersection4095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4095<T> = UnionToIntersection4095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4095<T extends unknown[], V> = [...T, V];

type TuplifyUnion4095<T, L = LastOf4095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4095<TuplifyUnion4095<Exclude<T, L>>, L>;

type DeepPartial4095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4095<T[P]> }
  : T;

type Paths4095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4095<K, Paths4095<T[K], Prev4095[D]>> : never }[keyof T]
  : never;

type Prev4095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4095 {
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

type ConfigPaths4095 = Paths4095<NestedConfig4095>;

interface HeavyProps4095 {
  config: DeepPartial4095<NestedConfig4095>;
  path?: ConfigPaths4095;
}

const HeavyComponent4095 = memo(function HeavyComponent4095({ config }: HeavyProps4095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4095.displayName = 'HeavyComponent4095';
export default HeavyComponent4095;
