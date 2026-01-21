'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9077<T> = T extends (infer U)[]
  ? DeepReadonlyArray9077<U>
  : T extends object
  ? DeepReadonlyObject9077<T>
  : T;

interface DeepReadonlyArray9077<T> extends ReadonlyArray<DeepReadonly9077<T>> {}

type DeepReadonlyObject9077<T> = {
  readonly [P in keyof T]: DeepReadonly9077<T[P]>;
};

type UnionToIntersection9077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9077<T> = UnionToIntersection9077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9077<T extends unknown[], V> = [...T, V];

type TuplifyUnion9077<T, L = LastOf9077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9077<TuplifyUnion9077<Exclude<T, L>>, L>;

type DeepPartial9077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9077<T[P]> }
  : T;

type Paths9077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9077<K, Paths9077<T[K], Prev9077[D]>> : never }[keyof T]
  : never;

type Prev9077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9077 {
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

type ConfigPaths9077 = Paths9077<NestedConfig9077>;

interface HeavyProps9077 {
  config: DeepPartial9077<NestedConfig9077>;
  path?: ConfigPaths9077;
}

const HeavyComponent9077 = memo(function HeavyComponent9077({ config }: HeavyProps9077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9077.displayName = 'HeavyComponent9077';
export default HeavyComponent9077;
