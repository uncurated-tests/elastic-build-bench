'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9104<T> = T extends (infer U)[]
  ? DeepReadonlyArray9104<U>
  : T extends object
  ? DeepReadonlyObject9104<T>
  : T;

interface DeepReadonlyArray9104<T> extends ReadonlyArray<DeepReadonly9104<T>> {}

type DeepReadonlyObject9104<T> = {
  readonly [P in keyof T]: DeepReadonly9104<T[P]>;
};

type UnionToIntersection9104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9104<T> = UnionToIntersection9104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9104<T extends unknown[], V> = [...T, V];

type TuplifyUnion9104<T, L = LastOf9104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9104<TuplifyUnion9104<Exclude<T, L>>, L>;

type DeepPartial9104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9104<T[P]> }
  : T;

type Paths9104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9104<K, Paths9104<T[K], Prev9104[D]>> : never }[keyof T]
  : never;

type Prev9104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9104 {
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

type ConfigPaths9104 = Paths9104<NestedConfig9104>;

interface HeavyProps9104 {
  config: DeepPartial9104<NestedConfig9104>;
  path?: ConfigPaths9104;
}

const HeavyComponent9104 = memo(function HeavyComponent9104({ config }: HeavyProps9104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9104.displayName = 'HeavyComponent9104';
export default HeavyComponent9104;
