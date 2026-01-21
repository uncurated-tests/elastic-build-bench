'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9126<T> = T extends (infer U)[]
  ? DeepReadonlyArray9126<U>
  : T extends object
  ? DeepReadonlyObject9126<T>
  : T;

interface DeepReadonlyArray9126<T> extends ReadonlyArray<DeepReadonly9126<T>> {}

type DeepReadonlyObject9126<T> = {
  readonly [P in keyof T]: DeepReadonly9126<T[P]>;
};

type UnionToIntersection9126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9126<T> = UnionToIntersection9126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9126<T extends unknown[], V> = [...T, V];

type TuplifyUnion9126<T, L = LastOf9126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9126<TuplifyUnion9126<Exclude<T, L>>, L>;

type DeepPartial9126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9126<T[P]> }
  : T;

type Paths9126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9126<K, Paths9126<T[K], Prev9126[D]>> : never }[keyof T]
  : never;

type Prev9126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9126 {
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

type ConfigPaths9126 = Paths9126<NestedConfig9126>;

interface HeavyProps9126 {
  config: DeepPartial9126<NestedConfig9126>;
  path?: ConfigPaths9126;
}

const HeavyComponent9126 = memo(function HeavyComponent9126({ config }: HeavyProps9126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9126.displayName = 'HeavyComponent9126';
export default HeavyComponent9126;
