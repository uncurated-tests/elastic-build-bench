'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9726<T> = T extends (infer U)[]
  ? DeepReadonlyArray9726<U>
  : T extends object
  ? DeepReadonlyObject9726<T>
  : T;

interface DeepReadonlyArray9726<T> extends ReadonlyArray<DeepReadonly9726<T>> {}

type DeepReadonlyObject9726<T> = {
  readonly [P in keyof T]: DeepReadonly9726<T[P]>;
};

type UnionToIntersection9726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9726<T> = UnionToIntersection9726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9726<T extends unknown[], V> = [...T, V];

type TuplifyUnion9726<T, L = LastOf9726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9726<TuplifyUnion9726<Exclude<T, L>>, L>;

type DeepPartial9726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9726<T[P]> }
  : T;

type Paths9726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9726<K, Paths9726<T[K], Prev9726[D]>> : never }[keyof T]
  : never;

type Prev9726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9726 {
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

type ConfigPaths9726 = Paths9726<NestedConfig9726>;

interface HeavyProps9726 {
  config: DeepPartial9726<NestedConfig9726>;
  path?: ConfigPaths9726;
}

const HeavyComponent9726 = memo(function HeavyComponent9726({ config }: HeavyProps9726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9726.displayName = 'HeavyComponent9726';
export default HeavyComponent9726;
