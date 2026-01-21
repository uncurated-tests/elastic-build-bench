'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9560<T> = T extends (infer U)[]
  ? DeepReadonlyArray9560<U>
  : T extends object
  ? DeepReadonlyObject9560<T>
  : T;

interface DeepReadonlyArray9560<T> extends ReadonlyArray<DeepReadonly9560<T>> {}

type DeepReadonlyObject9560<T> = {
  readonly [P in keyof T]: DeepReadonly9560<T[P]>;
};

type UnionToIntersection9560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9560<T> = UnionToIntersection9560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9560<T extends unknown[], V> = [...T, V];

type TuplifyUnion9560<T, L = LastOf9560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9560<TuplifyUnion9560<Exclude<T, L>>, L>;

type DeepPartial9560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9560<T[P]> }
  : T;

type Paths9560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9560<K, Paths9560<T[K], Prev9560[D]>> : never }[keyof T]
  : never;

type Prev9560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9560 {
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

type ConfigPaths9560 = Paths9560<NestedConfig9560>;

interface HeavyProps9560 {
  config: DeepPartial9560<NestedConfig9560>;
  path?: ConfigPaths9560;
}

const HeavyComponent9560 = memo(function HeavyComponent9560({ config }: HeavyProps9560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9560.displayName = 'HeavyComponent9560';
export default HeavyComponent9560;
