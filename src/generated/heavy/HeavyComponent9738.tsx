'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9738<T> = T extends (infer U)[]
  ? DeepReadonlyArray9738<U>
  : T extends object
  ? DeepReadonlyObject9738<T>
  : T;

interface DeepReadonlyArray9738<T> extends ReadonlyArray<DeepReadonly9738<T>> {}

type DeepReadonlyObject9738<T> = {
  readonly [P in keyof T]: DeepReadonly9738<T[P]>;
};

type UnionToIntersection9738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9738<T> = UnionToIntersection9738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9738<T extends unknown[], V> = [...T, V];

type TuplifyUnion9738<T, L = LastOf9738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9738<TuplifyUnion9738<Exclude<T, L>>, L>;

type DeepPartial9738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9738<T[P]> }
  : T;

type Paths9738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9738<K, Paths9738<T[K], Prev9738[D]>> : never }[keyof T]
  : never;

type Prev9738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9738 {
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

type ConfigPaths9738 = Paths9738<NestedConfig9738>;

interface HeavyProps9738 {
  config: DeepPartial9738<NestedConfig9738>;
  path?: ConfigPaths9738;
}

const HeavyComponent9738 = memo(function HeavyComponent9738({ config }: HeavyProps9738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9738.displayName = 'HeavyComponent9738';
export default HeavyComponent9738;
