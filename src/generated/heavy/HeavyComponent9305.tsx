'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9305<T> = T extends (infer U)[]
  ? DeepReadonlyArray9305<U>
  : T extends object
  ? DeepReadonlyObject9305<T>
  : T;

interface DeepReadonlyArray9305<T> extends ReadonlyArray<DeepReadonly9305<T>> {}

type DeepReadonlyObject9305<T> = {
  readonly [P in keyof T]: DeepReadonly9305<T[P]>;
};

type UnionToIntersection9305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9305<T> = UnionToIntersection9305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9305<T extends unknown[], V> = [...T, V];

type TuplifyUnion9305<T, L = LastOf9305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9305<TuplifyUnion9305<Exclude<T, L>>, L>;

type DeepPartial9305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9305<T[P]> }
  : T;

type Paths9305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9305<K, Paths9305<T[K], Prev9305[D]>> : never }[keyof T]
  : never;

type Prev9305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9305 {
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

type ConfigPaths9305 = Paths9305<NestedConfig9305>;

interface HeavyProps9305 {
  config: DeepPartial9305<NestedConfig9305>;
  path?: ConfigPaths9305;
}

const HeavyComponent9305 = memo(function HeavyComponent9305({ config }: HeavyProps9305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9305.displayName = 'HeavyComponent9305';
export default HeavyComponent9305;
