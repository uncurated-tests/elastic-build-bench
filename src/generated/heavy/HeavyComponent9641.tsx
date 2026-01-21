'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9641<T> = T extends (infer U)[]
  ? DeepReadonlyArray9641<U>
  : T extends object
  ? DeepReadonlyObject9641<T>
  : T;

interface DeepReadonlyArray9641<T> extends ReadonlyArray<DeepReadonly9641<T>> {}

type DeepReadonlyObject9641<T> = {
  readonly [P in keyof T]: DeepReadonly9641<T[P]>;
};

type UnionToIntersection9641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9641<T> = UnionToIntersection9641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9641<T extends unknown[], V> = [...T, V];

type TuplifyUnion9641<T, L = LastOf9641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9641<TuplifyUnion9641<Exclude<T, L>>, L>;

type DeepPartial9641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9641<T[P]> }
  : T;

type Paths9641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9641<K, Paths9641<T[K], Prev9641[D]>> : never }[keyof T]
  : never;

type Prev9641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9641 {
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

type ConfigPaths9641 = Paths9641<NestedConfig9641>;

interface HeavyProps9641 {
  config: DeepPartial9641<NestedConfig9641>;
  path?: ConfigPaths9641;
}

const HeavyComponent9641 = memo(function HeavyComponent9641({ config }: HeavyProps9641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9641.displayName = 'HeavyComponent9641';
export default HeavyComponent9641;
