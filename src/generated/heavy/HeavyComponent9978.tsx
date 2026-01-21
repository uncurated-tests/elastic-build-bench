'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9978<T> = T extends (infer U)[]
  ? DeepReadonlyArray9978<U>
  : T extends object
  ? DeepReadonlyObject9978<T>
  : T;

interface DeepReadonlyArray9978<T> extends ReadonlyArray<DeepReadonly9978<T>> {}

type DeepReadonlyObject9978<T> = {
  readonly [P in keyof T]: DeepReadonly9978<T[P]>;
};

type UnionToIntersection9978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9978<T> = UnionToIntersection9978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9978<T extends unknown[], V> = [...T, V];

type TuplifyUnion9978<T, L = LastOf9978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9978<TuplifyUnion9978<Exclude<T, L>>, L>;

type DeepPartial9978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9978<T[P]> }
  : T;

type Paths9978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9978<K, Paths9978<T[K], Prev9978[D]>> : never }[keyof T]
  : never;

type Prev9978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9978 {
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

type ConfigPaths9978 = Paths9978<NestedConfig9978>;

interface HeavyProps9978 {
  config: DeepPartial9978<NestedConfig9978>;
  path?: ConfigPaths9978;
}

const HeavyComponent9978 = memo(function HeavyComponent9978({ config }: HeavyProps9978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9978.displayName = 'HeavyComponent9978';
export default HeavyComponent9978;
