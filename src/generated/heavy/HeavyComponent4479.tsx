'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4479<T> = T extends (infer U)[]
  ? DeepReadonlyArray4479<U>
  : T extends object
  ? DeepReadonlyObject4479<T>
  : T;

interface DeepReadonlyArray4479<T> extends ReadonlyArray<DeepReadonly4479<T>> {}

type DeepReadonlyObject4479<T> = {
  readonly [P in keyof T]: DeepReadonly4479<T[P]>;
};

type UnionToIntersection4479<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4479<T> = UnionToIntersection4479<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4479<T extends unknown[], V> = [...T, V];

type TuplifyUnion4479<T, L = LastOf4479<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4479<TuplifyUnion4479<Exclude<T, L>>, L>;

type DeepPartial4479<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4479<T[P]> }
  : T;

type Paths4479<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4479<K, Paths4479<T[K], Prev4479[D]>> : never }[keyof T]
  : never;

type Prev4479 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4479<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4479 {
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

type ConfigPaths4479 = Paths4479<NestedConfig4479>;

interface HeavyProps4479 {
  config: DeepPartial4479<NestedConfig4479>;
  path?: ConfigPaths4479;
}

const HeavyComponent4479 = memo(function HeavyComponent4479({ config }: HeavyProps4479) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4479) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4479 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4479: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4479.displayName = 'HeavyComponent4479';
export default HeavyComponent4479;
