'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9877<T> = T extends (infer U)[]
  ? DeepReadonlyArray9877<U>
  : T extends object
  ? DeepReadonlyObject9877<T>
  : T;

interface DeepReadonlyArray9877<T> extends ReadonlyArray<DeepReadonly9877<T>> {}

type DeepReadonlyObject9877<T> = {
  readonly [P in keyof T]: DeepReadonly9877<T[P]>;
};

type UnionToIntersection9877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9877<T> = UnionToIntersection9877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9877<T extends unknown[], V> = [...T, V];

type TuplifyUnion9877<T, L = LastOf9877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9877<TuplifyUnion9877<Exclude<T, L>>, L>;

type DeepPartial9877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9877<T[P]> }
  : T;

type Paths9877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9877<K, Paths9877<T[K], Prev9877[D]>> : never }[keyof T]
  : never;

type Prev9877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9877 {
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

type ConfigPaths9877 = Paths9877<NestedConfig9877>;

interface HeavyProps9877 {
  config: DeepPartial9877<NestedConfig9877>;
  path?: ConfigPaths9877;
}

const HeavyComponent9877 = memo(function HeavyComponent9877({ config }: HeavyProps9877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9877.displayName = 'HeavyComponent9877';
export default HeavyComponent9877;
