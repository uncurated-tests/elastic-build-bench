'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4766<T> = T extends (infer U)[]
  ? DeepReadonlyArray4766<U>
  : T extends object
  ? DeepReadonlyObject4766<T>
  : T;

interface DeepReadonlyArray4766<T> extends ReadonlyArray<DeepReadonly4766<T>> {}

type DeepReadonlyObject4766<T> = {
  readonly [P in keyof T]: DeepReadonly4766<T[P]>;
};

type UnionToIntersection4766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4766<T> = UnionToIntersection4766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4766<T extends unknown[], V> = [...T, V];

type TuplifyUnion4766<T, L = LastOf4766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4766<TuplifyUnion4766<Exclude<T, L>>, L>;

type DeepPartial4766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4766<T[P]> }
  : T;

type Paths4766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4766<K, Paths4766<T[K], Prev4766[D]>> : never }[keyof T]
  : never;

type Prev4766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4766 {
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

type ConfigPaths4766 = Paths4766<NestedConfig4766>;

interface HeavyProps4766 {
  config: DeepPartial4766<NestedConfig4766>;
  path?: ConfigPaths4766;
}

const HeavyComponent4766 = memo(function HeavyComponent4766({ config }: HeavyProps4766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4766.displayName = 'HeavyComponent4766';
export default HeavyComponent4766;
