'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4525<T> = T extends (infer U)[]
  ? DeepReadonlyArray4525<U>
  : T extends object
  ? DeepReadonlyObject4525<T>
  : T;

interface DeepReadonlyArray4525<T> extends ReadonlyArray<DeepReadonly4525<T>> {}

type DeepReadonlyObject4525<T> = {
  readonly [P in keyof T]: DeepReadonly4525<T[P]>;
};

type UnionToIntersection4525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4525<T> = UnionToIntersection4525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4525<T extends unknown[], V> = [...T, V];

type TuplifyUnion4525<T, L = LastOf4525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4525<TuplifyUnion4525<Exclude<T, L>>, L>;

type DeepPartial4525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4525<T[P]> }
  : T;

type Paths4525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4525<K, Paths4525<T[K], Prev4525[D]>> : never }[keyof T]
  : never;

type Prev4525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4525 {
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

type ConfigPaths4525 = Paths4525<NestedConfig4525>;

interface HeavyProps4525 {
  config: DeepPartial4525<NestedConfig4525>;
  path?: ConfigPaths4525;
}

const HeavyComponent4525 = memo(function HeavyComponent4525({ config }: HeavyProps4525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4525.displayName = 'HeavyComponent4525';
export default HeavyComponent4525;
