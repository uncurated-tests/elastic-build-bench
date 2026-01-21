'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9402<T> = T extends (infer U)[]
  ? DeepReadonlyArray9402<U>
  : T extends object
  ? DeepReadonlyObject9402<T>
  : T;

interface DeepReadonlyArray9402<T> extends ReadonlyArray<DeepReadonly9402<T>> {}

type DeepReadonlyObject9402<T> = {
  readonly [P in keyof T]: DeepReadonly9402<T[P]>;
};

type UnionToIntersection9402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9402<T> = UnionToIntersection9402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9402<T extends unknown[], V> = [...T, V];

type TuplifyUnion9402<T, L = LastOf9402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9402<TuplifyUnion9402<Exclude<T, L>>, L>;

type DeepPartial9402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9402<T[P]> }
  : T;

type Paths9402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9402<K, Paths9402<T[K], Prev9402[D]>> : never }[keyof T]
  : never;

type Prev9402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9402 {
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

type ConfigPaths9402 = Paths9402<NestedConfig9402>;

interface HeavyProps9402 {
  config: DeepPartial9402<NestedConfig9402>;
  path?: ConfigPaths9402;
}

const HeavyComponent9402 = memo(function HeavyComponent9402({ config }: HeavyProps9402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9402.displayName = 'HeavyComponent9402';
export default HeavyComponent9402;
