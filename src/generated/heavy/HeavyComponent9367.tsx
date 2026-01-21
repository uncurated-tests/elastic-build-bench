'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9367<T> = T extends (infer U)[]
  ? DeepReadonlyArray9367<U>
  : T extends object
  ? DeepReadonlyObject9367<T>
  : T;

interface DeepReadonlyArray9367<T> extends ReadonlyArray<DeepReadonly9367<T>> {}

type DeepReadonlyObject9367<T> = {
  readonly [P in keyof T]: DeepReadonly9367<T[P]>;
};

type UnionToIntersection9367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9367<T> = UnionToIntersection9367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9367<T extends unknown[], V> = [...T, V];

type TuplifyUnion9367<T, L = LastOf9367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9367<TuplifyUnion9367<Exclude<T, L>>, L>;

type DeepPartial9367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9367<T[P]> }
  : T;

type Paths9367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9367<K, Paths9367<T[K], Prev9367[D]>> : never }[keyof T]
  : never;

type Prev9367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9367 {
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

type ConfigPaths9367 = Paths9367<NestedConfig9367>;

interface HeavyProps9367 {
  config: DeepPartial9367<NestedConfig9367>;
  path?: ConfigPaths9367;
}

const HeavyComponent9367 = memo(function HeavyComponent9367({ config }: HeavyProps9367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9367.displayName = 'HeavyComponent9367';
export default HeavyComponent9367;
