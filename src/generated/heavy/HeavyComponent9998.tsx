'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9998<T> = T extends (infer U)[]
  ? DeepReadonlyArray9998<U>
  : T extends object
  ? DeepReadonlyObject9998<T>
  : T;

interface DeepReadonlyArray9998<T> extends ReadonlyArray<DeepReadonly9998<T>> {}

type DeepReadonlyObject9998<T> = {
  readonly [P in keyof T]: DeepReadonly9998<T[P]>;
};

type UnionToIntersection9998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9998<T> = UnionToIntersection9998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9998<T extends unknown[], V> = [...T, V];

type TuplifyUnion9998<T, L = LastOf9998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9998<TuplifyUnion9998<Exclude<T, L>>, L>;

type DeepPartial9998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9998<T[P]> }
  : T;

type Paths9998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9998<K, Paths9998<T[K], Prev9998[D]>> : never }[keyof T]
  : never;

type Prev9998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9998 {
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

type ConfigPaths9998 = Paths9998<NestedConfig9998>;

interface HeavyProps9998 {
  config: DeepPartial9998<NestedConfig9998>;
  path?: ConfigPaths9998;
}

const HeavyComponent9998 = memo(function HeavyComponent9998({ config }: HeavyProps9998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9998.displayName = 'HeavyComponent9998';
export default HeavyComponent9998;
