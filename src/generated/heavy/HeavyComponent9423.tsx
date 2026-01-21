'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9423<T> = T extends (infer U)[]
  ? DeepReadonlyArray9423<U>
  : T extends object
  ? DeepReadonlyObject9423<T>
  : T;

interface DeepReadonlyArray9423<T> extends ReadonlyArray<DeepReadonly9423<T>> {}

type DeepReadonlyObject9423<T> = {
  readonly [P in keyof T]: DeepReadonly9423<T[P]>;
};

type UnionToIntersection9423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9423<T> = UnionToIntersection9423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9423<T extends unknown[], V> = [...T, V];

type TuplifyUnion9423<T, L = LastOf9423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9423<TuplifyUnion9423<Exclude<T, L>>, L>;

type DeepPartial9423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9423<T[P]> }
  : T;

type Paths9423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9423<K, Paths9423<T[K], Prev9423[D]>> : never }[keyof T]
  : never;

type Prev9423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9423 {
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

type ConfigPaths9423 = Paths9423<NestedConfig9423>;

interface HeavyProps9423 {
  config: DeepPartial9423<NestedConfig9423>;
  path?: ConfigPaths9423;
}

const HeavyComponent9423 = memo(function HeavyComponent9423({ config }: HeavyProps9423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9423.displayName = 'HeavyComponent9423';
export default HeavyComponent9423;
