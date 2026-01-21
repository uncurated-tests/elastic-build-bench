'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9146<T> = T extends (infer U)[]
  ? DeepReadonlyArray9146<U>
  : T extends object
  ? DeepReadonlyObject9146<T>
  : T;

interface DeepReadonlyArray9146<T> extends ReadonlyArray<DeepReadonly9146<T>> {}

type DeepReadonlyObject9146<T> = {
  readonly [P in keyof T]: DeepReadonly9146<T[P]>;
};

type UnionToIntersection9146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9146<T> = UnionToIntersection9146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9146<T extends unknown[], V> = [...T, V];

type TuplifyUnion9146<T, L = LastOf9146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9146<TuplifyUnion9146<Exclude<T, L>>, L>;

type DeepPartial9146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9146<T[P]> }
  : T;

type Paths9146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9146<K, Paths9146<T[K], Prev9146[D]>> : never }[keyof T]
  : never;

type Prev9146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9146 {
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

type ConfigPaths9146 = Paths9146<NestedConfig9146>;

interface HeavyProps9146 {
  config: DeepPartial9146<NestedConfig9146>;
  path?: ConfigPaths9146;
}

const HeavyComponent9146 = memo(function HeavyComponent9146({ config }: HeavyProps9146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9146.displayName = 'HeavyComponent9146';
export default HeavyComponent9146;
