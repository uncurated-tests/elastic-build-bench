'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9365<T> = T extends (infer U)[]
  ? DeepReadonlyArray9365<U>
  : T extends object
  ? DeepReadonlyObject9365<T>
  : T;

interface DeepReadonlyArray9365<T> extends ReadonlyArray<DeepReadonly9365<T>> {}

type DeepReadonlyObject9365<T> = {
  readonly [P in keyof T]: DeepReadonly9365<T[P]>;
};

type UnionToIntersection9365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9365<T> = UnionToIntersection9365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9365<T extends unknown[], V> = [...T, V];

type TuplifyUnion9365<T, L = LastOf9365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9365<TuplifyUnion9365<Exclude<T, L>>, L>;

type DeepPartial9365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9365<T[P]> }
  : T;

type Paths9365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9365<K, Paths9365<T[K], Prev9365[D]>> : never }[keyof T]
  : never;

type Prev9365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9365 {
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

type ConfigPaths9365 = Paths9365<NestedConfig9365>;

interface HeavyProps9365 {
  config: DeepPartial9365<NestedConfig9365>;
  path?: ConfigPaths9365;
}

const HeavyComponent9365 = memo(function HeavyComponent9365({ config }: HeavyProps9365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9365.displayName = 'HeavyComponent9365';
export default HeavyComponent9365;
