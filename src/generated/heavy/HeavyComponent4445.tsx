'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4445<T> = T extends (infer U)[]
  ? DeepReadonlyArray4445<U>
  : T extends object
  ? DeepReadonlyObject4445<T>
  : T;

interface DeepReadonlyArray4445<T> extends ReadonlyArray<DeepReadonly4445<T>> {}

type DeepReadonlyObject4445<T> = {
  readonly [P in keyof T]: DeepReadonly4445<T[P]>;
};

type UnionToIntersection4445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4445<T> = UnionToIntersection4445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4445<T extends unknown[], V> = [...T, V];

type TuplifyUnion4445<T, L = LastOf4445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4445<TuplifyUnion4445<Exclude<T, L>>, L>;

type DeepPartial4445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4445<T[P]> }
  : T;

type Paths4445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4445<K, Paths4445<T[K], Prev4445[D]>> : never }[keyof T]
  : never;

type Prev4445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4445 {
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

type ConfigPaths4445 = Paths4445<NestedConfig4445>;

interface HeavyProps4445 {
  config: DeepPartial4445<NestedConfig4445>;
  path?: ConfigPaths4445;
}

const HeavyComponent4445 = memo(function HeavyComponent4445({ config }: HeavyProps4445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4445.displayName = 'HeavyComponent4445';
export default HeavyComponent4445;
