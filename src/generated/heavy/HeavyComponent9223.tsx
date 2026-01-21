'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9223<T> = T extends (infer U)[]
  ? DeepReadonlyArray9223<U>
  : T extends object
  ? DeepReadonlyObject9223<T>
  : T;

interface DeepReadonlyArray9223<T> extends ReadonlyArray<DeepReadonly9223<T>> {}

type DeepReadonlyObject9223<T> = {
  readonly [P in keyof T]: DeepReadonly9223<T[P]>;
};

type UnionToIntersection9223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9223<T> = UnionToIntersection9223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9223<T extends unknown[], V> = [...T, V];

type TuplifyUnion9223<T, L = LastOf9223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9223<TuplifyUnion9223<Exclude<T, L>>, L>;

type DeepPartial9223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9223<T[P]> }
  : T;

type Paths9223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9223<K, Paths9223<T[K], Prev9223[D]>> : never }[keyof T]
  : never;

type Prev9223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9223 {
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

type ConfigPaths9223 = Paths9223<NestedConfig9223>;

interface HeavyProps9223 {
  config: DeepPartial9223<NestedConfig9223>;
  path?: ConfigPaths9223;
}

const HeavyComponent9223 = memo(function HeavyComponent9223({ config }: HeavyProps9223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9223.displayName = 'HeavyComponent9223';
export default HeavyComponent9223;
