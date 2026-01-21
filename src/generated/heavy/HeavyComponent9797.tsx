'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9797<T> = T extends (infer U)[]
  ? DeepReadonlyArray9797<U>
  : T extends object
  ? DeepReadonlyObject9797<T>
  : T;

interface DeepReadonlyArray9797<T> extends ReadonlyArray<DeepReadonly9797<T>> {}

type DeepReadonlyObject9797<T> = {
  readonly [P in keyof T]: DeepReadonly9797<T[P]>;
};

type UnionToIntersection9797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9797<T> = UnionToIntersection9797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9797<T extends unknown[], V> = [...T, V];

type TuplifyUnion9797<T, L = LastOf9797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9797<TuplifyUnion9797<Exclude<T, L>>, L>;

type DeepPartial9797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9797<T[P]> }
  : T;

type Paths9797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9797<K, Paths9797<T[K], Prev9797[D]>> : never }[keyof T]
  : never;

type Prev9797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9797 {
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

type ConfigPaths9797 = Paths9797<NestedConfig9797>;

interface HeavyProps9797 {
  config: DeepPartial9797<NestedConfig9797>;
  path?: ConfigPaths9797;
}

const HeavyComponent9797 = memo(function HeavyComponent9797({ config }: HeavyProps9797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9797.displayName = 'HeavyComponent9797';
export default HeavyComponent9797;
