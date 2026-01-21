'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9408<T> = T extends (infer U)[]
  ? DeepReadonlyArray9408<U>
  : T extends object
  ? DeepReadonlyObject9408<T>
  : T;

interface DeepReadonlyArray9408<T> extends ReadonlyArray<DeepReadonly9408<T>> {}

type DeepReadonlyObject9408<T> = {
  readonly [P in keyof T]: DeepReadonly9408<T[P]>;
};

type UnionToIntersection9408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9408<T> = UnionToIntersection9408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9408<T extends unknown[], V> = [...T, V];

type TuplifyUnion9408<T, L = LastOf9408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9408<TuplifyUnion9408<Exclude<T, L>>, L>;

type DeepPartial9408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9408<T[P]> }
  : T;

type Paths9408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9408<K, Paths9408<T[K], Prev9408[D]>> : never }[keyof T]
  : never;

type Prev9408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9408 {
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

type ConfigPaths9408 = Paths9408<NestedConfig9408>;

interface HeavyProps9408 {
  config: DeepPartial9408<NestedConfig9408>;
  path?: ConfigPaths9408;
}

const HeavyComponent9408 = memo(function HeavyComponent9408({ config }: HeavyProps9408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9408.displayName = 'HeavyComponent9408';
export default HeavyComponent9408;
