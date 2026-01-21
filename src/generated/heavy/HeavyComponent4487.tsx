'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4487<T> = T extends (infer U)[]
  ? DeepReadonlyArray4487<U>
  : T extends object
  ? DeepReadonlyObject4487<T>
  : T;

interface DeepReadonlyArray4487<T> extends ReadonlyArray<DeepReadonly4487<T>> {}

type DeepReadonlyObject4487<T> = {
  readonly [P in keyof T]: DeepReadonly4487<T[P]>;
};

type UnionToIntersection4487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4487<T> = UnionToIntersection4487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4487<T extends unknown[], V> = [...T, V];

type TuplifyUnion4487<T, L = LastOf4487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4487<TuplifyUnion4487<Exclude<T, L>>, L>;

type DeepPartial4487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4487<T[P]> }
  : T;

type Paths4487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4487<K, Paths4487<T[K], Prev4487[D]>> : never }[keyof T]
  : never;

type Prev4487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4487 {
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

type ConfigPaths4487 = Paths4487<NestedConfig4487>;

interface HeavyProps4487 {
  config: DeepPartial4487<NestedConfig4487>;
  path?: ConfigPaths4487;
}

const HeavyComponent4487 = memo(function HeavyComponent4487({ config }: HeavyProps4487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4487.displayName = 'HeavyComponent4487';
export default HeavyComponent4487;
