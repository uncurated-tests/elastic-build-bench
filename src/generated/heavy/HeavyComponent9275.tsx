'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9275<T> = T extends (infer U)[]
  ? DeepReadonlyArray9275<U>
  : T extends object
  ? DeepReadonlyObject9275<T>
  : T;

interface DeepReadonlyArray9275<T> extends ReadonlyArray<DeepReadonly9275<T>> {}

type DeepReadonlyObject9275<T> = {
  readonly [P in keyof T]: DeepReadonly9275<T[P]>;
};

type UnionToIntersection9275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9275<T> = UnionToIntersection9275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9275<T extends unknown[], V> = [...T, V];

type TuplifyUnion9275<T, L = LastOf9275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9275<TuplifyUnion9275<Exclude<T, L>>, L>;

type DeepPartial9275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9275<T[P]> }
  : T;

type Paths9275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9275<K, Paths9275<T[K], Prev9275[D]>> : never }[keyof T]
  : never;

type Prev9275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9275 {
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

type ConfigPaths9275 = Paths9275<NestedConfig9275>;

interface HeavyProps9275 {
  config: DeepPartial9275<NestedConfig9275>;
  path?: ConfigPaths9275;
}

const HeavyComponent9275 = memo(function HeavyComponent9275({ config }: HeavyProps9275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9275.displayName = 'HeavyComponent9275';
export default HeavyComponent9275;
