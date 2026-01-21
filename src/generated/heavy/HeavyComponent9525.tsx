'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9525<T> = T extends (infer U)[]
  ? DeepReadonlyArray9525<U>
  : T extends object
  ? DeepReadonlyObject9525<T>
  : T;

interface DeepReadonlyArray9525<T> extends ReadonlyArray<DeepReadonly9525<T>> {}

type DeepReadonlyObject9525<T> = {
  readonly [P in keyof T]: DeepReadonly9525<T[P]>;
};

type UnionToIntersection9525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9525<T> = UnionToIntersection9525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9525<T extends unknown[], V> = [...T, V];

type TuplifyUnion9525<T, L = LastOf9525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9525<TuplifyUnion9525<Exclude<T, L>>, L>;

type DeepPartial9525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9525<T[P]> }
  : T;

type Paths9525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9525<K, Paths9525<T[K], Prev9525[D]>> : never }[keyof T]
  : never;

type Prev9525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9525 {
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

type ConfigPaths9525 = Paths9525<NestedConfig9525>;

interface HeavyProps9525 {
  config: DeepPartial9525<NestedConfig9525>;
  path?: ConfigPaths9525;
}

const HeavyComponent9525 = memo(function HeavyComponent9525({ config }: HeavyProps9525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9525.displayName = 'HeavyComponent9525';
export default HeavyComponent9525;
