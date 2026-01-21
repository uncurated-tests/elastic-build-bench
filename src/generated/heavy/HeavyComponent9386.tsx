'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9386<T> = T extends (infer U)[]
  ? DeepReadonlyArray9386<U>
  : T extends object
  ? DeepReadonlyObject9386<T>
  : T;

interface DeepReadonlyArray9386<T> extends ReadonlyArray<DeepReadonly9386<T>> {}

type DeepReadonlyObject9386<T> = {
  readonly [P in keyof T]: DeepReadonly9386<T[P]>;
};

type UnionToIntersection9386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9386<T> = UnionToIntersection9386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9386<T extends unknown[], V> = [...T, V];

type TuplifyUnion9386<T, L = LastOf9386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9386<TuplifyUnion9386<Exclude<T, L>>, L>;

type DeepPartial9386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9386<T[P]> }
  : T;

type Paths9386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9386<K, Paths9386<T[K], Prev9386[D]>> : never }[keyof T]
  : never;

type Prev9386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9386 {
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

type ConfigPaths9386 = Paths9386<NestedConfig9386>;

interface HeavyProps9386 {
  config: DeepPartial9386<NestedConfig9386>;
  path?: ConfigPaths9386;
}

const HeavyComponent9386 = memo(function HeavyComponent9386({ config }: HeavyProps9386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9386.displayName = 'HeavyComponent9386';
export default HeavyComponent9386;
