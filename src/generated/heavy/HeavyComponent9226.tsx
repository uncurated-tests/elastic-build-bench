'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9226<T> = T extends (infer U)[]
  ? DeepReadonlyArray9226<U>
  : T extends object
  ? DeepReadonlyObject9226<T>
  : T;

interface DeepReadonlyArray9226<T> extends ReadonlyArray<DeepReadonly9226<T>> {}

type DeepReadonlyObject9226<T> = {
  readonly [P in keyof T]: DeepReadonly9226<T[P]>;
};

type UnionToIntersection9226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9226<T> = UnionToIntersection9226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9226<T extends unknown[], V> = [...T, V];

type TuplifyUnion9226<T, L = LastOf9226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9226<TuplifyUnion9226<Exclude<T, L>>, L>;

type DeepPartial9226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9226<T[P]> }
  : T;

type Paths9226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9226<K, Paths9226<T[K], Prev9226[D]>> : never }[keyof T]
  : never;

type Prev9226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9226 {
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

type ConfigPaths9226 = Paths9226<NestedConfig9226>;

interface HeavyProps9226 {
  config: DeepPartial9226<NestedConfig9226>;
  path?: ConfigPaths9226;
}

const HeavyComponent9226 = memo(function HeavyComponent9226({ config }: HeavyProps9226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9226.displayName = 'HeavyComponent9226';
export default HeavyComponent9226;
