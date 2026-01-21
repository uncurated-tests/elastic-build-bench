'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9721<T> = T extends (infer U)[]
  ? DeepReadonlyArray9721<U>
  : T extends object
  ? DeepReadonlyObject9721<T>
  : T;

interface DeepReadonlyArray9721<T> extends ReadonlyArray<DeepReadonly9721<T>> {}

type DeepReadonlyObject9721<T> = {
  readonly [P in keyof T]: DeepReadonly9721<T[P]>;
};

type UnionToIntersection9721<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9721<T> = UnionToIntersection9721<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9721<T extends unknown[], V> = [...T, V];

type TuplifyUnion9721<T, L = LastOf9721<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9721<TuplifyUnion9721<Exclude<T, L>>, L>;

type DeepPartial9721<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9721<T[P]> }
  : T;

type Paths9721<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9721<K, Paths9721<T[K], Prev9721[D]>> : never }[keyof T]
  : never;

type Prev9721 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9721<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9721 {
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

type ConfigPaths9721 = Paths9721<NestedConfig9721>;

interface HeavyProps9721 {
  config: DeepPartial9721<NestedConfig9721>;
  path?: ConfigPaths9721;
}

const HeavyComponent9721 = memo(function HeavyComponent9721({ config }: HeavyProps9721) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9721) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9721 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9721: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9721.displayName = 'HeavyComponent9721';
export default HeavyComponent9721;
