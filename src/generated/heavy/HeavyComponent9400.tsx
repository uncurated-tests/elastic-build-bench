'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9400<T> = T extends (infer U)[]
  ? DeepReadonlyArray9400<U>
  : T extends object
  ? DeepReadonlyObject9400<T>
  : T;

interface DeepReadonlyArray9400<T> extends ReadonlyArray<DeepReadonly9400<T>> {}

type DeepReadonlyObject9400<T> = {
  readonly [P in keyof T]: DeepReadonly9400<T[P]>;
};

type UnionToIntersection9400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9400<T> = UnionToIntersection9400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9400<T extends unknown[], V> = [...T, V];

type TuplifyUnion9400<T, L = LastOf9400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9400<TuplifyUnion9400<Exclude<T, L>>, L>;

type DeepPartial9400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9400<T[P]> }
  : T;

type Paths9400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9400<K, Paths9400<T[K], Prev9400[D]>> : never }[keyof T]
  : never;

type Prev9400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9400 {
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

type ConfigPaths9400 = Paths9400<NestedConfig9400>;

interface HeavyProps9400 {
  config: DeepPartial9400<NestedConfig9400>;
  path?: ConfigPaths9400;
}

const HeavyComponent9400 = memo(function HeavyComponent9400({ config }: HeavyProps9400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9400.displayName = 'HeavyComponent9400';
export default HeavyComponent9400;
