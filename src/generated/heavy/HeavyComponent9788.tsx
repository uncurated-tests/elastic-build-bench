'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9788<T> = T extends (infer U)[]
  ? DeepReadonlyArray9788<U>
  : T extends object
  ? DeepReadonlyObject9788<T>
  : T;

interface DeepReadonlyArray9788<T> extends ReadonlyArray<DeepReadonly9788<T>> {}

type DeepReadonlyObject9788<T> = {
  readonly [P in keyof T]: DeepReadonly9788<T[P]>;
};

type UnionToIntersection9788<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9788<T> = UnionToIntersection9788<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9788<T extends unknown[], V> = [...T, V];

type TuplifyUnion9788<T, L = LastOf9788<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9788<TuplifyUnion9788<Exclude<T, L>>, L>;

type DeepPartial9788<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9788<T[P]> }
  : T;

type Paths9788<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9788<K, Paths9788<T[K], Prev9788[D]>> : never }[keyof T]
  : never;

type Prev9788 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9788<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9788 {
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

type ConfigPaths9788 = Paths9788<NestedConfig9788>;

interface HeavyProps9788 {
  config: DeepPartial9788<NestedConfig9788>;
  path?: ConfigPaths9788;
}

const HeavyComponent9788 = memo(function HeavyComponent9788({ config }: HeavyProps9788) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9788) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9788 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9788: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9788.displayName = 'HeavyComponent9788';
export default HeavyComponent9788;
