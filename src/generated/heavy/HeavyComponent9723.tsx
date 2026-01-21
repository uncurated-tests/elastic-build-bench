'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9723<T> = T extends (infer U)[]
  ? DeepReadonlyArray9723<U>
  : T extends object
  ? DeepReadonlyObject9723<T>
  : T;

interface DeepReadonlyArray9723<T> extends ReadonlyArray<DeepReadonly9723<T>> {}

type DeepReadonlyObject9723<T> = {
  readonly [P in keyof T]: DeepReadonly9723<T[P]>;
};

type UnionToIntersection9723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9723<T> = UnionToIntersection9723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9723<T extends unknown[], V> = [...T, V];

type TuplifyUnion9723<T, L = LastOf9723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9723<TuplifyUnion9723<Exclude<T, L>>, L>;

type DeepPartial9723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9723<T[P]> }
  : T;

type Paths9723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9723<K, Paths9723<T[K], Prev9723[D]>> : never }[keyof T]
  : never;

type Prev9723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9723 {
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

type ConfigPaths9723 = Paths9723<NestedConfig9723>;

interface HeavyProps9723 {
  config: DeepPartial9723<NestedConfig9723>;
  path?: ConfigPaths9723;
}

const HeavyComponent9723 = memo(function HeavyComponent9723({ config }: HeavyProps9723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9723.displayName = 'HeavyComponent9723';
export default HeavyComponent9723;
