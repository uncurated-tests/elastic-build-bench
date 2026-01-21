'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4938<T> = T extends (infer U)[]
  ? DeepReadonlyArray4938<U>
  : T extends object
  ? DeepReadonlyObject4938<T>
  : T;

interface DeepReadonlyArray4938<T> extends ReadonlyArray<DeepReadonly4938<T>> {}

type DeepReadonlyObject4938<T> = {
  readonly [P in keyof T]: DeepReadonly4938<T[P]>;
};

type UnionToIntersection4938<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4938<T> = UnionToIntersection4938<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4938<T extends unknown[], V> = [...T, V];

type TuplifyUnion4938<T, L = LastOf4938<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4938<TuplifyUnion4938<Exclude<T, L>>, L>;

type DeepPartial4938<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4938<T[P]> }
  : T;

type Paths4938<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4938<K, Paths4938<T[K], Prev4938[D]>> : never }[keyof T]
  : never;

type Prev4938 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4938<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4938 {
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

type ConfigPaths4938 = Paths4938<NestedConfig4938>;

interface HeavyProps4938 {
  config: DeepPartial4938<NestedConfig4938>;
  path?: ConfigPaths4938;
}

const HeavyComponent4938 = memo(function HeavyComponent4938({ config }: HeavyProps4938) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4938) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4938 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4938: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4938.displayName = 'HeavyComponent4938';
export default HeavyComponent4938;
