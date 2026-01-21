'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9702<T> = T extends (infer U)[]
  ? DeepReadonlyArray9702<U>
  : T extends object
  ? DeepReadonlyObject9702<T>
  : T;

interface DeepReadonlyArray9702<T> extends ReadonlyArray<DeepReadonly9702<T>> {}

type DeepReadonlyObject9702<T> = {
  readonly [P in keyof T]: DeepReadonly9702<T[P]>;
};

type UnionToIntersection9702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9702<T> = UnionToIntersection9702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9702<T extends unknown[], V> = [...T, V];

type TuplifyUnion9702<T, L = LastOf9702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9702<TuplifyUnion9702<Exclude<T, L>>, L>;

type DeepPartial9702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9702<T[P]> }
  : T;

type Paths9702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9702<K, Paths9702<T[K], Prev9702[D]>> : never }[keyof T]
  : never;

type Prev9702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9702 {
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

type ConfigPaths9702 = Paths9702<NestedConfig9702>;

interface HeavyProps9702 {
  config: DeepPartial9702<NestedConfig9702>;
  path?: ConfigPaths9702;
}

const HeavyComponent9702 = memo(function HeavyComponent9702({ config }: HeavyProps9702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9702.displayName = 'HeavyComponent9702';
export default HeavyComponent9702;
