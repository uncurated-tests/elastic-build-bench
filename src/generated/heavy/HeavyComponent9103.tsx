'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9103<T> = T extends (infer U)[]
  ? DeepReadonlyArray9103<U>
  : T extends object
  ? DeepReadonlyObject9103<T>
  : T;

interface DeepReadonlyArray9103<T> extends ReadonlyArray<DeepReadonly9103<T>> {}

type DeepReadonlyObject9103<T> = {
  readonly [P in keyof T]: DeepReadonly9103<T[P]>;
};

type UnionToIntersection9103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9103<T> = UnionToIntersection9103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9103<T extends unknown[], V> = [...T, V];

type TuplifyUnion9103<T, L = LastOf9103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9103<TuplifyUnion9103<Exclude<T, L>>, L>;

type DeepPartial9103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9103<T[P]> }
  : T;

type Paths9103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9103<K, Paths9103<T[K], Prev9103[D]>> : never }[keyof T]
  : never;

type Prev9103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9103 {
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

type ConfigPaths9103 = Paths9103<NestedConfig9103>;

interface HeavyProps9103 {
  config: DeepPartial9103<NestedConfig9103>;
  path?: ConfigPaths9103;
}

const HeavyComponent9103 = memo(function HeavyComponent9103({ config }: HeavyProps9103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9103.displayName = 'HeavyComponent9103';
export default HeavyComponent9103;
