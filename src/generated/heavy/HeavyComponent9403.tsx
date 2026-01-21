'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9403<T> = T extends (infer U)[]
  ? DeepReadonlyArray9403<U>
  : T extends object
  ? DeepReadonlyObject9403<T>
  : T;

interface DeepReadonlyArray9403<T> extends ReadonlyArray<DeepReadonly9403<T>> {}

type DeepReadonlyObject9403<T> = {
  readonly [P in keyof T]: DeepReadonly9403<T[P]>;
};

type UnionToIntersection9403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9403<T> = UnionToIntersection9403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9403<T extends unknown[], V> = [...T, V];

type TuplifyUnion9403<T, L = LastOf9403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9403<TuplifyUnion9403<Exclude<T, L>>, L>;

type DeepPartial9403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9403<T[P]> }
  : T;

type Paths9403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9403<K, Paths9403<T[K], Prev9403[D]>> : never }[keyof T]
  : never;

type Prev9403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9403 {
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

type ConfigPaths9403 = Paths9403<NestedConfig9403>;

interface HeavyProps9403 {
  config: DeepPartial9403<NestedConfig9403>;
  path?: ConfigPaths9403;
}

const HeavyComponent9403 = memo(function HeavyComponent9403({ config }: HeavyProps9403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9403.displayName = 'HeavyComponent9403';
export default HeavyComponent9403;
