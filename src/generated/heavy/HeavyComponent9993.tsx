'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9993<T> = T extends (infer U)[]
  ? DeepReadonlyArray9993<U>
  : T extends object
  ? DeepReadonlyObject9993<T>
  : T;

interface DeepReadonlyArray9993<T> extends ReadonlyArray<DeepReadonly9993<T>> {}

type DeepReadonlyObject9993<T> = {
  readonly [P in keyof T]: DeepReadonly9993<T[P]>;
};

type UnionToIntersection9993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9993<T> = UnionToIntersection9993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9993<T extends unknown[], V> = [...T, V];

type TuplifyUnion9993<T, L = LastOf9993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9993<TuplifyUnion9993<Exclude<T, L>>, L>;

type DeepPartial9993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9993<T[P]> }
  : T;

type Paths9993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9993<K, Paths9993<T[K], Prev9993[D]>> : never }[keyof T]
  : never;

type Prev9993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9993 {
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

type ConfigPaths9993 = Paths9993<NestedConfig9993>;

interface HeavyProps9993 {
  config: DeepPartial9993<NestedConfig9993>;
  path?: ConfigPaths9993;
}

const HeavyComponent9993 = memo(function HeavyComponent9993({ config }: HeavyProps9993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9993.displayName = 'HeavyComponent9993';
export default HeavyComponent9993;
