'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9473<T> = T extends (infer U)[]
  ? DeepReadonlyArray9473<U>
  : T extends object
  ? DeepReadonlyObject9473<T>
  : T;

interface DeepReadonlyArray9473<T> extends ReadonlyArray<DeepReadonly9473<T>> {}

type DeepReadonlyObject9473<T> = {
  readonly [P in keyof T]: DeepReadonly9473<T[P]>;
};

type UnionToIntersection9473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9473<T> = UnionToIntersection9473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9473<T extends unknown[], V> = [...T, V];

type TuplifyUnion9473<T, L = LastOf9473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9473<TuplifyUnion9473<Exclude<T, L>>, L>;

type DeepPartial9473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9473<T[P]> }
  : T;

type Paths9473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9473<K, Paths9473<T[K], Prev9473[D]>> : never }[keyof T]
  : never;

type Prev9473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9473 {
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

type ConfigPaths9473 = Paths9473<NestedConfig9473>;

interface HeavyProps9473 {
  config: DeepPartial9473<NestedConfig9473>;
  path?: ConfigPaths9473;
}

const HeavyComponent9473 = memo(function HeavyComponent9473({ config }: HeavyProps9473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9473.displayName = 'HeavyComponent9473';
export default HeavyComponent9473;
