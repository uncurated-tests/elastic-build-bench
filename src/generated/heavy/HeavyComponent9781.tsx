'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9781<T> = T extends (infer U)[]
  ? DeepReadonlyArray9781<U>
  : T extends object
  ? DeepReadonlyObject9781<T>
  : T;

interface DeepReadonlyArray9781<T> extends ReadonlyArray<DeepReadonly9781<T>> {}

type DeepReadonlyObject9781<T> = {
  readonly [P in keyof T]: DeepReadonly9781<T[P]>;
};

type UnionToIntersection9781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9781<T> = UnionToIntersection9781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9781<T extends unknown[], V> = [...T, V];

type TuplifyUnion9781<T, L = LastOf9781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9781<TuplifyUnion9781<Exclude<T, L>>, L>;

type DeepPartial9781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9781<T[P]> }
  : T;

type Paths9781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9781<K, Paths9781<T[K], Prev9781[D]>> : never }[keyof T]
  : never;

type Prev9781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9781 {
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

type ConfigPaths9781 = Paths9781<NestedConfig9781>;

interface HeavyProps9781 {
  config: DeepPartial9781<NestedConfig9781>;
  path?: ConfigPaths9781;
}

const HeavyComponent9781 = memo(function HeavyComponent9781({ config }: HeavyProps9781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9781.displayName = 'HeavyComponent9781';
export default HeavyComponent9781;
