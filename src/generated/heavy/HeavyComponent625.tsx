'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly625<T> = T extends (infer U)[]
  ? DeepReadonlyArray625<U>
  : T extends object
  ? DeepReadonlyObject625<T>
  : T;

interface DeepReadonlyArray625<T> extends ReadonlyArray<DeepReadonly625<T>> {}

type DeepReadonlyObject625<T> = {
  readonly [P in keyof T]: DeepReadonly625<T[P]>;
};

type UnionToIntersection625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf625<T> = UnionToIntersection625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push625<T extends unknown[], V> = [...T, V];

type TuplifyUnion625<T, L = LastOf625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push625<TuplifyUnion625<Exclude<T, L>>, L>;

type DeepPartial625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial625<T[P]> }
  : T;

type Paths625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join625<K, Paths625<T[K], Prev625[D]>> : never }[keyof T]
  : never;

type Prev625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig625 {
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

type ConfigPaths625 = Paths625<NestedConfig625>;

interface HeavyProps625 {
  config: DeepPartial625<NestedConfig625>;
  path?: ConfigPaths625;
}

const HeavyComponent625 = memo(function HeavyComponent625({ config }: HeavyProps625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent625.displayName = 'HeavyComponent625';
export default HeavyComponent625;
