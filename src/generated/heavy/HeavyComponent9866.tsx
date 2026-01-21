'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9866<T> = T extends (infer U)[]
  ? DeepReadonlyArray9866<U>
  : T extends object
  ? DeepReadonlyObject9866<T>
  : T;

interface DeepReadonlyArray9866<T> extends ReadonlyArray<DeepReadonly9866<T>> {}

type DeepReadonlyObject9866<T> = {
  readonly [P in keyof T]: DeepReadonly9866<T[P]>;
};

type UnionToIntersection9866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9866<T> = UnionToIntersection9866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9866<T extends unknown[], V> = [...T, V];

type TuplifyUnion9866<T, L = LastOf9866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9866<TuplifyUnion9866<Exclude<T, L>>, L>;

type DeepPartial9866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9866<T[P]> }
  : T;

type Paths9866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9866<K, Paths9866<T[K], Prev9866[D]>> : never }[keyof T]
  : never;

type Prev9866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9866 {
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

type ConfigPaths9866 = Paths9866<NestedConfig9866>;

interface HeavyProps9866 {
  config: DeepPartial9866<NestedConfig9866>;
  path?: ConfigPaths9866;
}

const HeavyComponent9866 = memo(function HeavyComponent9866({ config }: HeavyProps9866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9866.displayName = 'HeavyComponent9866';
export default HeavyComponent9866;
