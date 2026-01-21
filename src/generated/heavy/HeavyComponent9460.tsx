'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9460<T> = T extends (infer U)[]
  ? DeepReadonlyArray9460<U>
  : T extends object
  ? DeepReadonlyObject9460<T>
  : T;

interface DeepReadonlyArray9460<T> extends ReadonlyArray<DeepReadonly9460<T>> {}

type DeepReadonlyObject9460<T> = {
  readonly [P in keyof T]: DeepReadonly9460<T[P]>;
};

type UnionToIntersection9460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9460<T> = UnionToIntersection9460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9460<T extends unknown[], V> = [...T, V];

type TuplifyUnion9460<T, L = LastOf9460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9460<TuplifyUnion9460<Exclude<T, L>>, L>;

type DeepPartial9460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9460<T[P]> }
  : T;

type Paths9460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9460<K, Paths9460<T[K], Prev9460[D]>> : never }[keyof T]
  : never;

type Prev9460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9460 {
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

type ConfigPaths9460 = Paths9460<NestedConfig9460>;

interface HeavyProps9460 {
  config: DeepPartial9460<NestedConfig9460>;
  path?: ConfigPaths9460;
}

const HeavyComponent9460 = memo(function HeavyComponent9460({ config }: HeavyProps9460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9460.displayName = 'HeavyComponent9460';
export default HeavyComponent9460;
