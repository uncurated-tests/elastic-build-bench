'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9567<T> = T extends (infer U)[]
  ? DeepReadonlyArray9567<U>
  : T extends object
  ? DeepReadonlyObject9567<T>
  : T;

interface DeepReadonlyArray9567<T> extends ReadonlyArray<DeepReadonly9567<T>> {}

type DeepReadonlyObject9567<T> = {
  readonly [P in keyof T]: DeepReadonly9567<T[P]>;
};

type UnionToIntersection9567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9567<T> = UnionToIntersection9567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9567<T extends unknown[], V> = [...T, V];

type TuplifyUnion9567<T, L = LastOf9567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9567<TuplifyUnion9567<Exclude<T, L>>, L>;

type DeepPartial9567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9567<T[P]> }
  : T;

type Paths9567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9567<K, Paths9567<T[K], Prev9567[D]>> : never }[keyof T]
  : never;

type Prev9567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9567 {
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

type ConfigPaths9567 = Paths9567<NestedConfig9567>;

interface HeavyProps9567 {
  config: DeepPartial9567<NestedConfig9567>;
  path?: ConfigPaths9567;
}

const HeavyComponent9567 = memo(function HeavyComponent9567({ config }: HeavyProps9567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9567.displayName = 'HeavyComponent9567';
export default HeavyComponent9567;
