'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9720<T> = T extends (infer U)[]
  ? DeepReadonlyArray9720<U>
  : T extends object
  ? DeepReadonlyObject9720<T>
  : T;

interface DeepReadonlyArray9720<T> extends ReadonlyArray<DeepReadonly9720<T>> {}

type DeepReadonlyObject9720<T> = {
  readonly [P in keyof T]: DeepReadonly9720<T[P]>;
};

type UnionToIntersection9720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9720<T> = UnionToIntersection9720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9720<T extends unknown[], V> = [...T, V];

type TuplifyUnion9720<T, L = LastOf9720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9720<TuplifyUnion9720<Exclude<T, L>>, L>;

type DeepPartial9720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9720<T[P]> }
  : T;

type Paths9720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9720<K, Paths9720<T[K], Prev9720[D]>> : never }[keyof T]
  : never;

type Prev9720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9720 {
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

type ConfigPaths9720 = Paths9720<NestedConfig9720>;

interface HeavyProps9720 {
  config: DeepPartial9720<NestedConfig9720>;
  path?: ConfigPaths9720;
}

const HeavyComponent9720 = memo(function HeavyComponent9720({ config }: HeavyProps9720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9720.displayName = 'HeavyComponent9720';
export default HeavyComponent9720;
