'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9770<T> = T extends (infer U)[]
  ? DeepReadonlyArray9770<U>
  : T extends object
  ? DeepReadonlyObject9770<T>
  : T;

interface DeepReadonlyArray9770<T> extends ReadonlyArray<DeepReadonly9770<T>> {}

type DeepReadonlyObject9770<T> = {
  readonly [P in keyof T]: DeepReadonly9770<T[P]>;
};

type UnionToIntersection9770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9770<T> = UnionToIntersection9770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9770<T extends unknown[], V> = [...T, V];

type TuplifyUnion9770<T, L = LastOf9770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9770<TuplifyUnion9770<Exclude<T, L>>, L>;

type DeepPartial9770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9770<T[P]> }
  : T;

type Paths9770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9770<K, Paths9770<T[K], Prev9770[D]>> : never }[keyof T]
  : never;

type Prev9770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9770 {
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

type ConfigPaths9770 = Paths9770<NestedConfig9770>;

interface HeavyProps9770 {
  config: DeepPartial9770<NestedConfig9770>;
  path?: ConfigPaths9770;
}

const HeavyComponent9770 = memo(function HeavyComponent9770({ config }: HeavyProps9770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9770.displayName = 'HeavyComponent9770';
export default HeavyComponent9770;
