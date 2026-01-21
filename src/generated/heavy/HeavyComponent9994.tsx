'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9994<T> = T extends (infer U)[]
  ? DeepReadonlyArray9994<U>
  : T extends object
  ? DeepReadonlyObject9994<T>
  : T;

interface DeepReadonlyArray9994<T> extends ReadonlyArray<DeepReadonly9994<T>> {}

type DeepReadonlyObject9994<T> = {
  readonly [P in keyof T]: DeepReadonly9994<T[P]>;
};

type UnionToIntersection9994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9994<T> = UnionToIntersection9994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9994<T extends unknown[], V> = [...T, V];

type TuplifyUnion9994<T, L = LastOf9994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9994<TuplifyUnion9994<Exclude<T, L>>, L>;

type DeepPartial9994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9994<T[P]> }
  : T;

type Paths9994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9994<K, Paths9994<T[K], Prev9994[D]>> : never }[keyof T]
  : never;

type Prev9994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9994 {
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

type ConfigPaths9994 = Paths9994<NestedConfig9994>;

interface HeavyProps9994 {
  config: DeepPartial9994<NestedConfig9994>;
  path?: ConfigPaths9994;
}

const HeavyComponent9994 = memo(function HeavyComponent9994({ config }: HeavyProps9994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9994.displayName = 'HeavyComponent9994';
export default HeavyComponent9994;
